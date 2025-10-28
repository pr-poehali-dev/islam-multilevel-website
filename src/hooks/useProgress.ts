import { useState, useEffect } from 'react';
import { UserProgress, Achievement } from '@/types/learning';
import { achievements } from '@/data/achievements';

const STORAGE_KEY = 'islamic-learning-progress';
const STREAK_KEY = 'islamic-learning-streak';

export const useProgress = () => {
  const [progress, setProgress] = useState<Record<string, UserProgress>>({});
  const [unlockedAchievements, setUnlockedAchievements] = useState<Achievement[]>([]);
  const [currentStreak, setCurrentStreak] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setProgress(JSON.parse(stored));
    }

    const streakData = localStorage.getItem(STREAK_KEY);
    if (streakData) {
      const { streak, lastDate } = JSON.parse(streakData);
      const today = new Date().toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      
      if (lastDate === today) {
        setCurrentStreak(streak);
      } else if (lastDate === yesterday) {
        setCurrentStreak(streak);
      } else {
        setCurrentStreak(0);
      }
    }

    checkAchievements();
  }, []);

  const saveProgress = (newProgress: Record<string, UserProgress>) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
    setProgress(newProgress);
    updateStreak();
    checkAchievements();
  };

  const updateStreak = () => {
    const today = new Date().toDateString();
    const streakData = localStorage.getItem(STREAK_KEY);
    
    if (streakData) {
      const { streak, lastDate } = JSON.parse(streakData);
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      
      if (lastDate === today) {
        return;
      } else if (lastDate === yesterday) {
        const newStreak = streak + 1;
        setCurrentStreak(newStreak);
        localStorage.setItem(STREAK_KEY, JSON.stringify({ streak: newStreak, lastDate: today }));
      } else {
        setCurrentStreak(1);
        localStorage.setItem(STREAK_KEY, JSON.stringify({ streak: 1, lastDate: today }));
      }
    } else {
      setCurrentStreak(1);
      localStorage.setItem(STREAK_KEY, JSON.stringify({ streak: 1, lastDate: today }));
    }
  };

  const completeLesson = (courseId: string, lessonId: string) => {
    const courseProgress = progress[courseId] || {
      courseId,
      completedLessons: [],
      quizScores: {},
      lastAccessed: new Date(),
      totalTime: 0
    };

    if (!courseProgress.completedLessons.includes(lessonId)) {
      courseProgress.completedLessons.push(lessonId);
      courseProgress.lastAccessed = new Date();
    }

    const newProgress = {
      ...progress,
      [courseId]: courseProgress
    };

    saveProgress(newProgress);
  };

  const saveQuizScore = (courseId: string, lessonId: string, score: number) => {
    const courseProgress = progress[courseId] || {
      courseId,
      completedLessons: [],
      quizScores: {},
      lastAccessed: new Date(),
      totalTime: 0
    };

    courseProgress.quizScores[lessonId] = score;
    courseProgress.lastAccessed = new Date();

    const newProgress = {
      ...progress,
      [courseId]: courseProgress
    };

    saveProgress(newProgress);
  };

  const checkAchievements = () => {
    const unlocked: Achievement[] = [];
    const totalLessons = Object.values(progress).reduce(
      (sum, p) => sum + p.completedLessons.length,
      0
    );
    const totalCourses = Object.keys(progress).filter(
      courseId => progress[courseId].completedLessons.length > 0
    ).length;
    const passedQuizzes = Object.values(progress).reduce(
      (sum, p) => sum + Object.values(p.quizScores).filter(score => score >= 80).length,
      0
    );

    achievements.forEach(achievement => {
      const isUnlocked = unlockedAchievements.some(a => a.id === achievement.id);
      if (isUnlocked) return;

      let shouldUnlock = false;

      switch (achievement.requirement.type) {
        case 'lessons':
          shouldUnlock = totalLessons >= achievement.requirement.count;
          break;
        case 'courses':
          shouldUnlock = totalCourses >= achievement.requirement.count;
          break;
        case 'quizzes':
          shouldUnlock = passedQuizzes >= achievement.requirement.count;
          break;
        case 'streak':
          shouldUnlock = currentStreak >= achievement.requirement.count;
          break;
      }

      if (shouldUnlock) {
        unlocked.push({ ...achievement, unlockedAt: new Date() });
      }
    });

    if (unlocked.length > 0) {
      setUnlockedAchievements([...unlockedAchievements, ...unlocked]);
    }
  };

  const getCourseProgress = (courseId: string) => {
    return progress[courseId];
  };

  const getOverallStats = () => {
    const totalLessons = Object.values(progress).reduce(
      (sum, p) => sum + p.completedLessons.length,
      0
    );
    const totalCourses = Object.keys(progress).length;
    const averageQuizScore = Object.values(progress).reduce((sum, p) => {
      const scores = Object.values(p.quizScores);
      return sum + (scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0);
    }, 0) / (totalCourses || 1);

    return {
      totalLessons,
      totalCourses,
      averageQuizScore: Math.round(averageQuizScore),
      currentStreak,
      totalAchievements: unlockedAchievements.length
    };
  };

  return {
    progress,
    completeLesson,
    saveQuizScore,
    getCourseProgress,
    getOverallStats,
    unlockedAchievements,
    currentStreak
  };
};
