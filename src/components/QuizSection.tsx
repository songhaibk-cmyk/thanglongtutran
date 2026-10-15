import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { QuizQuestion, Landmark } from '../types';
import {
  HelpCircle,
  CheckCircle,
  XCircle,
  RotateCcw,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

interface QuizSectionProps {
  questions: QuizQuestion[];
  landmarks: Landmark[];
  onExploreLandmark: (landmarkId: string) => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  questions,
  landmarks,
  onExploreLandmark,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<
    { questionId: string; selected: number; isCorrect: boolean }[]
  >([]);

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(index);
  };

  const handleConfirmAnswer = () => {
    if (selectedAnswer === null || isAnswerSubmitted) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswerIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setIsAnswerSubmitted(true);
    setUserAnswers((prev) => [
      ...prev,
      { questionId: currentQuestion.id, selected: selectedAnswer, isCorrect },
    ]);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // gracefully ignore if canvas not supported
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
    setUserAnswers([]);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#9E2A2B] to-[#6E1B1B] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-amber-900/40">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-semibold mb-2.5 border border-amber-400/30">
              <HelpCircle className="w-3.5 h-3.5" />
              Đố vui nhanh kiến thức Tứ Trấn
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Khảo nghiệm Hiểu biết Lịch sử & Văn học
            </h2>
            <p className="text-amber-100/90 text-sm mt-1.5 leading-relaxed">
              Trắc nghiệm kiểm tra kiến thức về thần tích, báu vật cổ truyền, thi ca và vai trò của 4 ngôi đền thiêng bảo vệ Thăng Long xưa.
            </p>
          </div>
          <div className="hidden sm:flex flex-col items-center justify-center p-3 bg-white/10 rounded-xl border border-white/20 text-center shrink-0">
            <span className="text-2xl font-bold font-serif">{score}/{questions.length}</span>
            <span className="text-[10px] uppercase text-amber-200 tracking-wider">Điểm số</span>
          </div>
        </div>
      </div>

      {!quizFinished ? (
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-stone-600">
              <span>
                Câu hỏi {currentIndex + 1} / {questions.length}
              </span>
              <span>Đạt: {Math.round((score / Math.max(1, currentIndex + (isAnswerSubmitted ? 1 : 0))) * 100)}%</span>
            </div>
            <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#8B1E1E] transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Title */}
          <div>
            <h3 className="font-serif-title text-lg sm:text-xl font-bold text-stone-900 leading-snug">
              {currentQuestion.question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrectAnswer = idx === currentQuestion.correctAnswerIndex;

              let optionStyle =
                'border-stone-200 bg-[#FAF8F5] text-stone-800 hover:border-[#8B1E1E]/50 hover:bg-stone-50';

              if (isSelected && !isAnswerSubmitted) {
                optionStyle = 'border-[#8B1E1E] bg-rose-50 text-[#8B1E1E] ring-2 ring-[#8B1E1E]/30 font-semibold';
              } else if (isAnswerSubmitted) {
                if (isCorrectAnswer) {
                  optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-400 font-semibold';
                } else if (isSelected && !isCorrectAnswer) {
                  optionStyle = 'border-rose-400 bg-rose-50 text-rose-900 line-through';
                } else {
                  optionStyle = 'border-stone-200 bg-stone-50/50 text-stone-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                >
                  <span
                    className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 mt-0.5 ${
                      isSelected && !isAnswerSubmitted
                        ? 'bg-[#8B1E1E] text-white'
                        : isAnswerSubmitted && isCorrectAnswer
                        ? 'bg-emerald-600 text-white'
                        : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {isAnswerSubmitted && isCorrectAnswer && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Revealed after confirming answer) */}
          {isAnswerSubmitted && (
            <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200/90 space-y-2 animate-fadeIn text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-bold text-amber-950">
                <BookOpen className="w-4 h-4 text-[#8B1E1E]" />
                <span>Giải thích cặn kẽ đáp án:</span>
              </div>
              <p className="text-stone-700 leading-relaxed">
                {currentQuestion.explanation}
              </p>
              <div className="pt-2 border-t border-amber-200/60 flex items-center gap-1.5 text-xs text-stone-600">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Nguồn kiến thức: <strong className="text-stone-800">{currentQuestion.knowledgeSource}</strong></span>
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2 flex items-center justify-between">
            <div className="text-xs text-stone-500">
              {!isAnswerSubmitted
                ? 'Hãy chọn một phương án và nhấn "Xác nhận"'
                : 'Đã hoàn thành câu hỏi này'}
            </div>

            {!isAnswerSubmitted ? (
              <button
                onClick={handleConfirmAnswer}
                disabled={selectedAnswer === null}
                className="px-5 py-2.5 bg-[#8B1E1E] disabled:bg-stone-300 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                Xác nhận câu trả lời
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-1.5 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <span>{currentIndex < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả chung cuộc'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* QUIZ SUMMARY VIEW */
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-10 text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-[#8B1E1E]">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <h3 className="font-serif-title text-2xl font-bold text-stone-900">
              Chúc mừng bạn đã hoàn thành thử thách!
            </h3>
            <p className="text-stone-600 text-sm mt-1">
              Bạn đã trả lời đúng <strong className="text-[#8B1E1E] text-base">{score}</strong> trên tổng số {questions.length} câu hỏi.
            </p>
          </div>

          {/* Performance Badge */}
          <div className="p-4 bg-[#FAF7F0] rounded-xl border border-stone-200 max-w-md mx-auto text-xs text-stone-700 leading-relaxed">
            {score === questions.length ? (
              <span className="text-emerald-800 font-semibold">
                🌟 Xuất sắc! Bạn nắm giữ kiến thức vô cùng sâu sắc về Thăng Long Tứ Trấn và di sản văn học Kinh kỳ!
              </span>
            ) : score >= questions.length / 2 ? (
              <span className="text-amber-800 font-semibold">
                👏 Rất tốt! Bạn đã có hiểu biết phong phú về văn hóa Tứ Trấn. Hãy mở thêm trang đọc tác phẩm để tích lũy thêm các kiến giải thú vị nhé!
              </span>
            ) : (
              <span className="text-stone-700">
                🌱 Bạn đã bắt đầu hành trình khám phá! Hãy quay lại bản đồ tương tác để đọc kỹ thần tích và thơ ca của từng ngôi đền nhé!
              </span>
            )}
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleRestartQuiz}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm lại bài kiểm tra</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
