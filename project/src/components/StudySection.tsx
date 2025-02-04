import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Brain, Clock, Coffee, PenTool, Calculator, Beaker, Languages, Plus, Save } from 'lucide-react';
import { StudyTip, Quiz, StudyNote } from '../types';

const studyTips: StudyTip[] = [
  {
    id: 1,
    title: 'Pomodoro Technique',
    description: 'Study for 25 minutes, then take a 5-minute break. Repeat 4 times, then take a longer break.',
    category: 'time-management'
  },
  {
    id: 2,
    title: 'Active Recall',
    description: 'Test yourself on the material instead of simply re-reading it.',
    category: 'learning-technique'
  },
  {
    id: 3,
    title: 'Mind Mapping',
    description: 'Create visual representations of concepts to better understand relationships.',
    category: 'note-taking'
  }
];

export const sampleQuizzes: Quiz[] = [
  {
    id: 1,
    subject: 'Mathematics',
    title: 'Algebra Basics',
    difficulty: 'Easy',
    questionsCount: 5,
    questions: [
      {
        id: 1,
        text: 'What is the value of x in the equation 2x + 5 = 13?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 1
      },
      {
        id: 2,
        text: 'Simplify: 3(x + 2) - 2(x - 1)',
        options: ['x + 8', 'x + 4', '5x + 4', 'x + 2'],
        correctAnswer: 1
      },
      {
        id: 3,
        text: 'What is the slope of the line y = 2x + 3?',
        options: ['1', '2', '3', '4'],
        correctAnswer: 1
      },
      {
        id: 4,
        text: 'Solve for y: 3y - 6 = 12',
        options: ['4', '6', '8', '10'],
        correctAnswer: 2
      },
      {
        id: 5,
        text: 'What is the y-intercept of the line y = 3x + 4?',
        options: ['0', '3', '4', '-4'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    subject: 'Physics',
    title: 'Mechanics',
    difficulty: 'Medium',
    questionsCount: 5,
    questions: [
      {
        id: 1,
        text: 'What is the SI unit of force?',
        options: ['Joule', 'Newton', 'Pascal', 'Watt'],
        correctAnswer: 1
      },
      {
        id: 2,
        text: 'Which law states that every action has an equal and opposite reaction?',
        options: ['First Law', 'Second Law', 'Third Law', 'Fourth Law'],
        correctAnswer: 2
      },
      {
        id: 3,
        text: 'What is acceleration?',
        options: [
          'Change in velocity over time',
          'Change in distance over time',
          'Change in speed over distance',
          'Change in momentum over time'
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        text: 'What is the formula for kinetic energy?',
        options: ['mgh', '1/2mv²', 'mv', 'ma'],
        correctAnswer: 1
      },
      {
        id: 5,
        text: 'What is the unit of work?',
        options: ['Newton', 'Joule', 'Watt', 'Pascal'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    subject: 'Chemistry',
    title: 'Periodic Table',
    difficulty: 'Easy',
    questionsCount: 5,
    questions: [
      {
        id: 1,
        text: 'What is the atomic number of Carbon?',
        options: ['4', '6', '8', '12'],
        correctAnswer: 1
      },
      {
        id: 2,
        text: 'Which group contains noble gases?',
        options: ['Group 1', 'Group 8', 'Group 17', 'Group 18'],
        correctAnswer: 3
      },
      {
        id: 3,
        text: 'What is the chemical symbol for Gold?',
        options: ['Ag', 'Au', 'Fe', 'Cu'],
        correctAnswer: 1
      },
      {
        id: 4,
        text: 'Which element is a liquid at room temperature?',
        options: ['Iron', 'Mercury', 'Copper', 'Zinc'],
        correctAnswer: 1
      },
      {
        id: 5,
        text: 'What is the most abundant element in the Earth\'s crust?',
        options: ['Silicon', 'Oxygen', 'Carbon', 'Iron'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    subject: 'English',
    title: 'Grammar Rules',
    difficulty: 'Medium',
    questionsCount: 5,
    questions: [
      {
        id: 1,
        text: 'Which of these is a proper noun?',
        options: ['dog', 'Paris', 'book', 'happy'],
        correctAnswer: 1
      },
      {
        id: 2,
        text: 'What type of word is "quickly"?',
        options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
        correctAnswer: 3
      },
      {
        id: 3,
        text: 'Which sentence is in the past perfect tense?',
        options: [
          'I am running',
          'I ran',
          'I had run',
          'I will run'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        text: 'What is the plural of "child"?',
        options: ['childs', 'childes', 'children', 'child\'s'],
        correctAnswer: 2
      },
      {
        id: 5,
        text: 'Which word is a conjunction?',
        options: ['quickly', 'but', 'happy', 'jump'],
        correctAnswer: 1
      }
    ]
  }
];

export function StudySection() {
  const navigate = useNavigate();
  const [activeSubject, setActiveSubject] = useState<string>('all');
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [notes, setNotes] = useState<StudyNote[]>([]);

  const filteredQuizzes = activeSubject === 'all' 
    ? sampleQuizzes 
    : sampleQuizzes.filter(quiz => quiz.subject.toLowerCase() === activeSubject);

  const handleSaveNote = () => {
    if (noteTitle && noteContent) {
      const newNote: StudyNote = {
        id: notes.length + 1,
        subject: activeSubject === 'all' ? 'General' : activeSubject,
        title: noteTitle,
        content: noteContent,
        lastModified: new Date()
      };
      setNotes([...notes, newNote]);
      setNoteTitle('');
      setNoteContent('');
    }
  };

  const handleQuizClick = (quizId: number) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Study Resources</h1>
        <p className="text-gray-600">Enhance your learning with proven study techniques, quizzes, and resources.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Study Tips */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Brain className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Study Tips</h2>
            </div>
            <div className="space-y-4">
              {studyTips.map(tip => (
                <div key={tip.id} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column - Quizzes */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Calculator className="h-6 w-6 text-purple-600 mr-2" />
                <h2 className="text-xl font-semibold">Practice Quizzes</h2>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => setActiveSubject('all')}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeSubject === 'all' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-purple-100 text-purple-600'
                }`}
              >
                All
              </button>
              {['mathematics', 'physics', 'chemistry', 'english'].map(subject => (
                <button
                  key={subject}
                  onClick={() => setActiveSubject(subject)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeSubject === subject 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-purple-100 text-purple-600'
                  }`}
                >
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {filteredQuizzes.map(quiz => (
                <div
                  key={quiz.id}
                  onClick={() => handleQuizClick(quiz.id)}
                  className="p-4 border rounded-lg hover:border-purple-300 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800">{quiz.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      quiz.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      quiz.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {quiz.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{quiz.subject}</span>
                    <span>{quiz.questionsCount} questions</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Study Notes */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <PenTool className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold">Study Notes</h2>
              </div>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Note Title"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <textarea
                placeholder="Write your study notes here..."
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                className="w-full h-32 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
              <button
                onClick={handleSaveNote}
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <Save className="h-4 w-4" />
                Save Note
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {notes.map(note => (
                <div key={note.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800">{note.title}</h3>
                    <span className="text-xs text-gray-500">
                      {note.lastModified.toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{note.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}