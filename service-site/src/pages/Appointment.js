import React, { useState, useRef, useEffect } from 'react';
import Picker from '../components/datePicker';
import InputField from '../components/Input';
import Button from '@mui/material/Button';
import { useSearchParams } from 'react-router-dom';
import './Appointment.css';
import instructorsData from '../utils/slider.json'; 

function AppointmentPage() {
    const [name, setName] = useState('');
    const [reason, setReason] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const messageRef = useRef(null);
    const [subject, setSubject] = useState('');
    const [searchParams] = useSearchParams();
    const selectedPlan = searchParams.get('plan');
    const selectedSubject = searchParams.get('subject');
    const selectedInstructor = searchParams.get('instructor');
    const [tier, setTier] = useState('');
    const [instructor, setInstructor] = useState('');

    const instructorSubjectMap = {};
    instructorsData.forEach(item => {
        if (item.instructor && item.subject) {
            if (!instructorSubjectMap[item.instructor]) {
                instructorSubjectMap[item.instructor] = [];
            }
            if (!instructorSubjectMap[item.instructor].includes(item.subject)) {
                instructorSubjectMap[item.instructor].push(item.subject);
            }
        }
    });
    

    useEffect(() => {
        if (selectedPlan) setTier(selectedPlan);
    }, [selectedPlan]);

    useEffect(() => {
        if (selectedSubject) setSubject(selectedSubject);
    }, [selectedSubject]);

    useEffect(() => {
        if (selectedInstructor) setInstructor(selectedInstructor);
    }, [selectedInstructor]);

    const handleSubmit = () => {
        // Check if instructor can teach the selected subject
        if (
            instructor &&
            subject &&
            instructorSubjectMap[instructor] &&
            !instructorSubjectMap[instructor].includes(subject)
        ) {
            alert(`${instructor} does not teach ${subject}. Please select a valid subject/instructor combination.`);
            return;
        }

        if (
            name.trim() &&
            email.trim() &&
            reason.trim() &&
            subject.trim() &&
            tier.trim() &&
            instructor.trim() &&
            selectedDate
        ) {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 3000);
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="appointment-container">
            <div className="appointment-form-wrapper">
                <h1 className="appointment-title">Book an Appointment</h1>

                <InputField
                    label={<span className="appointment-section-title">Full Name</span>}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <InputField
                    label={<span className="appointment-section-title">Email</span>}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@example.com"
                />
                <InputField
                    label={<span className="appointment-section-title">Reason for Booking</span>}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="e.g. Exam prep, Deep learning"
                />

                <h2 className="appointment-section-title">Choose your Subject</h2>
                <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="appointment-select"
                >
                    <option value="">-- Select a subject --</option>
                    <option value="Math">Math</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="Computing">Computer Science</option>
                    <option value="English">English</option>
                    <option value="French">French</option>
                </select>

                <h2 className="appointment-section-title">Choose your package</h2>
                <select
                    value={tier}
                    onChange={(e) => setTier(e.target.value)}
                    className="appointment-select"
                >
                    <option value="">-- Select a package --</option>
                    <option value="Per Session">Single</option>
                    <option value="10 Class Package">10 Course Package</option>
                    <option value="Semester Package">Semester Package</option>
                </select>

                <h2 className="appointment-section-title">Choose your Instructor</h2>
                <select
                    value={instructor}
                    onChange={(e) => setInstructor(e.target.value)}
                    className="appointment-select"
                >
                    <option value="">-- Select an instructor --</option>
                    <option value="James">James</option>
                    <option value="Leo">Leo</option>
                    <option value="Samantha">Samantha</option>
                    <option value="Carl">Carl</option>
                    <option value="Alicia">Alicia</option>
                    <option value="Michael">Michael</option>
                    <option value="Sarah">Sarah</option>
                </select>

                <div className="appointment-picker-section">
                    <label className="appointment-section-title">Select Date & Time</label>
                    <div className="appointment-picker-wrapper">
                        <Picker
                            value={selectedDate}
                            onChange={(event) => {
                                setSelectedDate(event.value);
                            }}
                        />
                    </div>
                </div>

                <div className="appointment-submit-section">
                    <Button variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>

                    <div
                        ref={messageRef}
                        className={`appointment-success-message${showMessage ? '' : ' hide'}`}
                    >
                        Submission Successful <br /> We will contact you soon!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppointmentPage;