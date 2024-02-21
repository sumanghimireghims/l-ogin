import React, { useState } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



function Home() {
    const [date, setDate] = useState(new Date());
    const data = [
      { name: 'Male', value: 45 },
      { name: 'Female', value: 55 }
    ];
  
    const COLORS = ['#d50000', '#FFA500'];
  
    const examData = [
      { date: '2022-01-01', exams: 2, avgScore: 80, passingRate: 75 }
    ];
  
    const exam = [
      { name: 'Date 1', value: 400 },
      { name: 'Date 2', value: 300 },
      { name: 'Date 3', value: 200 }
      // Add more data as needed
    ];
  return (
        <main>
        {/* cards are here */}
                <div className="cards">
                    <div className="card student-card">
                    <p className="obj">Students</p>
                    <p className="num">200</p>
                    </div>
                    <div className="card teacher-card">
                    <p className="obj">Teacher</p>
                    <p className="num">200</p>
                    </div>
                    <div className="card class-card">
                    <p className="obj">Class</p>
                    <p className="num">2</p>
                    </div>
                    <div className="card section-card">
                    <p className="obj">Section</p>
                    <p className="num">2</p>
                    </div>
                    <div className="card subject-card">
                    <p className="obj">Subject</p>
                    <p className="num">7</p>
                    </div>
                </div>
                <div className="datas">
                    <div className="left-side">
                    <div className="calendar cox">
                    <Calendar onChange={setDate} value={date} />                    </div>
                    </div>
                    <div className="right-side">
                    <div className="upper">
                        <div className="exam-graph cox">
                        <h3>Exam graph</h3>
                        <div className="chart-container">
                            <p>Exam conducted</p>
                            <ResponsiveContainer>
                            <LineChart data={exam} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" horizontalClosed="#ccc" verticalClosed="#ccc" />
                                <XAxis dataKey="name" />
                                <YAxis label={{ value: 'Exams', angle: -90, position: 'insideLeft' }} />
                                <Tooltip /> 
                                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="months">Months</p>
                        </div>
                        <div className="students cox">
                        <h3>Students</h3>
                        <div className="chart-container2">
                        <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                    dataKey="value"
                                    isAnimationActive={false}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                    >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                                </ResponsiveContainer>                        </div>
                        <div className="chart-data">
                            <ul>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="upcoming-exams cox">
                        <h3>Upcoming exams</h3>
                        </div>
                    </div>
                    </div>
                </div>
        </main>

  )
}

export default Home
