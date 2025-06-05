import Picker from '../components/datePicker';
import React, { useState } from 'react';
import InputField from '../components/Input';
import Button from '@mui/material/Button';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';


function AppointmentPage() {
    const [name, setName] = useState('');
    const [reason, setReason] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const messageRef = React.useRef(null);
    const [subject, setSubject] = useState('');
    const [searchParams] = useSearchParams();
    const selectedPlan = searchParams.get('plan');
    const [tier, setTier] = useState('');


    const handleSubmit = () => {
        if (
            name.trim() &&
            email.trim() &&
            reason.trim() &&
            subject.trim() &&
            tier.trim() &&
            selectedDate
        ) {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 3000);
        } else {
            alert('Please fill in all fields.');
        }
    };

    useEffect(() => {
        if (selectedPlan) {
            setTier(selectedPlan);
        }
    }, [selectedPlan]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
            <div style={{minWidth: '500px', margin: 'auto', padding: '1.5rem', outline: '1px solid grey'}}>
                <h1 style={{textAlign: 'center', paddingBottom: '0.5rem'}}>Book an Appointment</h1>

                <InputField
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <InputField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@example.com"
                />
                <InputField
                    label="Reason for Booking"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="e.g. Exam prep, Deep learning"
                />

                <h2 style={{padding: '0.5rem 0'}}>Choose your Subject</h2>
                <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    style={{
                        width: '100%',
                        outline: '1px solid grey',
                        padding: '0.5rem',
                        marginBottom: '1rem',
                    }}
                >
                    <option value="">-- Select a subject --</option>
                    <option value="math">Math</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="biology">Biology</option>
                </select>


                <h2 style={{padding: '0.5rem 0'}}>Choose your package</h2>
                <select
                    value={tier}
                    onChange={(e) => setTier(e.target.value)}
                    style={{
                        width: '100%',
                        outline: '1px solid grey',
                        padding: '0.5rem',
                        marginBottom: '1rem',
                    }}
                >
                    <option value="">-- Select a package --</option>
                    <option value="Per Session">Single</option>
                    <option value="10 Class Package">10 Course Package</option>
                    <option value="Semester Package">Semester Package</option>
                </select>

                <div style={{marginTop: '1rem'}}>
                    <label style={{display: 'block', width: '100%'}}>Select Date & Time</label>
                    {/*<Picker*/}
                    {/*    value={selectedDate}*/}
                    {/*    onChange={(val) => setSelectedDate(val.value)}*/}
                    {/*/>*/}


                    <Picker
                        value={selectedDate}
                        onChange={(event) => {
                            setSelectedDate(event.value);  // this is a string
                        }}
                    />

                </div>

                <div style={{marginTop: '1.5rem'}}>
                    <Button variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>

                    <div
                        ref={messageRef}
                        style={{
                            maxHeight: showMessage ? '100px' : '0px',
                            opacity: showMessage ? 1 : 0,
                            overflow: 'hidden',
                            backgroundColor: 'lightgreen',
                            color: 'white',
                            padding: showMessage ? '1rem' : '0 1rem',
                            borderRadius: '5px',
                            marginTop: '1rem',
                            textAlign: 'center',
                            transition: 'all 0.5s ease'
                        }}
                    >
                        Submission Successful
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppointmentPage;
