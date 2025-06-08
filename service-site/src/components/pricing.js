import React from "react";
import { Link } from 'react-router-dom';
import './pricing.css';

const PricingSection = () => {
    return (
        <section className="pricing-section">
            <div className="pricing-container">
                <div className="pricing-header">
                    <span className="pricing-title">
                        Pricing Table
                    </span>
                    <h2 className="pricing-heading">
                        Our Pricing Plan
                    </h2>
                    <p className="pricing-desc">
                        There are many different ways to learn from our tutors, flexible plan and contact us anytime!
                    </p>
                </div>
                <div className="pricing-cards-row">
                    <div className="pricing-cards-row">
                        <PricingCard
                            type="Per Session"
                            price="$45"
                            subscription="Course"
                            description="Perfect for a finals review right before exam week!."
                            buttonText="Choose Per Session"
                        >
                            <List>1 Course</List>
                            <List>Readily available</List>
                            <List>Cancel a day before for a full refund</List>
                            <List>Free worksheets</List>
                            <List>3 months expiry date</List>
                        </PricingCard>
                        <PricingCard
                            type="10 Class Package"
                            price="$350"
                            subscription="10Courses"
                            description="Perfect for learning hard to grasp concepts."
                            buttonText="Choose 10 Class Package"
                            active
                        >
                            <List>10 Courses</List>
                            <List>Readily available</List>
                            <List>Cancel a day before for a full refund</List>
                            <List>Free worksheets</List>
                            <List>6 months expiry date</List>
                        </PricingCard>
                        <PricingCard
                            type="Semester Package"
                            price="$2000"
                            subscription="Semester"
                            description="Perfect for acing the semester or deeplearning concepts."
                            buttonText="Choose Semester Package"
                        >
                            <List>30 Course</List>
                            <List>Readily available</List>
                            <List>Cancel a day before for a full refund</List>
                            <List>Free worksheets</List>
                            <List>12 months expiry date</List>
                        </PricingCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;

const PricingCard = ({
    children,
    description,
    price,
    type,
    subscription,
    buttonText,
    active,
}) => {
    return (
        <div className="pricing-card-col">
            <div className="pricing-card">
                <span className="pricing-type">{type}</span>
                <h2 className="pricing-price">
                    {price}
                    <span> / {subscription}</span>
                </h2>
                <p className="pricing-desc">{description}</p>
                <div className="pricing-list">{children}</div>
                <Link
                    to={`/appointment?plan=${encodeURIComponent(type)}`}
                    className={`pricing-btn${active ? " active" : ""}`}
                >
                    {buttonText}
                </Link>
                <span className="pricing-svg">
                    <svg
                        width={77}
                        height={172}
                        viewBox="0 0 77 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                        <defs>
                            <linearGradient
                                id="paint0_linear"
                                x1={86}
                                y1={0}
                                x2={86}
                                y2={172}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#3056D3" stopOpacity="0.09" />
                                <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="pricing-svg-small">
                    <svg
                        width={41}
                        height={89}
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="38.9138"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 38.9138 87.4849)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="38.9138"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 38.9138 74.9871)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="38.9138"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 38.9138 62.4892)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="38.9138"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 38.9138 38.3457)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="38.9138"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 38.9138 13.634)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="38.9138"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 38.9138 50.2754)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="38.9138"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 38.9138 26.1319)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="38.9138"
                            cy="1.42021"
                            r="1.42021"
                            transform="rotate(180 38.9138 1.42021)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="26.4157"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 26.4157 87.4849)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="26.4157"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 26.4157 74.9871)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="26.4157"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 26.4157 62.4892)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="26.4157"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 26.4157 38.3457)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="26.4157"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 26.4157 13.634)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="26.4157"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 26.4157 50.2754)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="26.4157"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 26.4157 26.1319)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="26.4157"
                            cy="1.4202"
                            r="1.42021"
                            transform="rotate(180 26.4157 1.4202)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="13.9177"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 13.9177 87.4849)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="13.9177"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 13.9177 74.9871)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="13.9177"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 13.9177 62.4892)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="13.9177"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 13.9177 38.3457)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="13.9177"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 13.9177 13.634)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="13.9177"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 13.9177 50.2754)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="13.9177"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 13.9177 26.1319)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="13.9177"
                            cy="1.42019"
                            r="1.42021"
                            transform="rotate(180 13.9177 1.42019)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="1.41963"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 1.41963 87.4849)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="1.41963"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 1.41963 74.9871)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="1.41963"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 1.41963 62.4892)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="1.41963"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 1.41963 38.3457)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="1.41963"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 1.41963 13.634)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="1.41963"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 1.41963 50.2754)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="1.41963"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 1.41963 26.1319)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="1.41963"
                            cy="1.4202"
                            r="1.42021"
                            transform="rotate(180 1.41963 1.4202)"
                            fill="#3056D3"
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
};

const List = ({ children }) => {
    return (
        <p className="pricing-list-item">{children}</p>
    );
};