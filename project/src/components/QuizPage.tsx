import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { sampleQuizzes } from './StudySection';
import { Quiz } from '../types';

export function QuizPage() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<Quiz | undefined>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  useEffect(() => {
    const foundQuiz = sampleQuizzes.find(q => q.id === Number(quizId));
    if (foundQuiz) {
      setQuiz(foundQuiz);
    }
  }, [quizId]);

  if (!quiz) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">Quiz not found</div>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (selectedAnswer === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Study Resources
      </button>

      <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{quiz.title}</h1>
          <p className="text-gray-600">
            {quiz.subject} - {quiz.difficulty}
          </p>
        </div>

        {!showResult ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
                <span>Score: {score}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 rounded-full h-2 transition-all"
                  style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                {quiz.questions[currentQuestion].text}
              </h2>
              <div className="space-y-3">
                {quiz.questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border transition-colors ${
                      selectedAnswer === index
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className={`w-full py-3 rounded-lg font-semibold ${
                selectedAnswer === null
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {currentQuestion + 1 === quiz.questions.length ? 'Finish Quiz' : 'Next Question'}
            </button>
          </>
        ) : (
          <div className="text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold mb-2">
                {Math.round((score / quiz.questions.length) * 100)}%
              </div>
              <p className="text-gray-600">
                You got {score} out of {quiz.questions.length} questions correct
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {quiz.questions.map((question, index) => (
                <div key={index} className="text-left p-4 rounded-lg bg-gray-50">
                  <div className="flex items-start">
                    {answers[index] === question.correctAnswer ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" />
                    )}
                    <div>
                      <p className="font-medium">{question.text}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Your answer: {question.options[answers[index]]}
                      </p>
                      {answers[index] !== question.correctAnswer && (
                        <p className="text-sm text-green-600 mt-1">
                          Correct answer: {question.options[question.correctAnswer]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleRetry}
                className="flex-1 py-3 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700"
              >
                Try Again
              </button>
              <button
                onClick={() => navigate('/')}
                className="flex-1 py-3 rounded-lg font-semibold border border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                Back to Study
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}