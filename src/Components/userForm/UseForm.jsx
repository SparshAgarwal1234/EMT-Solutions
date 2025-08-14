import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UseForm.css";
import { motion, useAnimation } from "framer-motion";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    TextField,
    FormControlLabel,
    Checkbox,
    FormLabel,
    FormControl,
    RadioGroup,
    Radio,
    InputLabel,
    Select,
    MenuItem,
    Stepper,
    Step,
    StepLabel,
    Typography,
    Button,
} from '@material-ui/core';
import { UseForm2 } from "./UseForm2";
import UserForm from "./UserForm";
import { UpgradeOption } from "./UpgradeOption";
import Navbar from "./navbar";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function UseForm() {
    const navigate = useNavigate();
    const initialValues = {
        username: "",
        email: "",
        income: "",
        occupation: "",
        education: "",
        lifeCover: "",
        CoverFor: "",
        paymentMode: "",
        pincode: "",
        city: "",
        nationality: "",
        medicalhistory: "",
        planOptions: ""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const props = { formValues, setFormValues, handleChange };

    const useStyles = makeStyles((theme) => ({
        inputField: {
            width: "100%",
            margin: theme.spacing(1, 0),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 350,
            maxWidth: 400,
            marginLeft: 30
        },
        chips: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        chip: {
            margin: 2,
        },
        noLabel: {
            marginTop: theme.spacing(3),
        },
        root: {
            width: '100%',
        },
        button: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        thankYouPopup: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        },
        thankYouContent: {
            backgroundColor: '#fff',
            padding: theme.spacing(3),
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            maxWidth: '400px'
        }
    }));

    const classes = useStyles();
    const theme = useTheme();

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 360,
            },
        },
    };

    function getSteps() {
        return ['Your Details', 'Upgrade your plan', 'Add-On Riders'];
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <UserForm {...props} />;
            case 1:
                return <UseForm2 {...props} />;
            case 2:
                return <UpgradeOption {...props} />;
            default:
                return '';
        }
    }

    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const control = useAnimation();

    const addFormData = () => {
        if (activeStep === steps.length - 1) { // Final step (Add-On Riders)
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setShowThankYou(true); // Show thank you popup
                setTimeout(() => {
                    setShowThankYou(false);
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                    navigate('/review');
                }, 3000); // Hide popup and navigate after 3 seconds
            }, 1000); // Simulate loading
        } else {
            handleNext();
        }
    };

    const handleData = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        setIsSubmit(true);
        if (Object.keys(errors).length === 0) {
            addFormData();
        }
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "The Name Field is required!";
        }
        if (!values.email) {
            errors.email = "The Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.income) {
            errors.income = "Income is required";
        }
        return errors;
    };

    const [showPlansPopup, setShowPlansPopup] = useState(false);

    const plans = [
        {
            id: 1,
            name: "Basic Plan",
            price: "₹599/month",
            coverage: "5 Lakhs",
            features: ["No Medical Test", "Tax Benefits", "Instant Policy"]
        },
        {
            id: 2,
            name: "Premium Plan",
            price: "₹999/month",
            coverage: "10 Lakhs",
            features: ["Family Coverage", "Free Health Checkup", "24x7 Support"]
        },
        {
            id: 3,
            name: "Elite Plan",
            price: "₹1499/month",
            coverage: "15 Lakhs",
            features: ["International Coverage", "Zero Waiting Period", "Lifetime Renewal"]
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="form-heading">
                    <div className="knowYourPlan" onClick={() => setShowPlansPopup(true)}>
                        <img src="" alt="" />
                        <span>Know Your Plan in 2 min</span>
                    </div>
                </div>

                {showPlansPopup && (
                    <div className="plans-popup-overlay" onClick={() => setShowPlansPopup(false)}>
                        <div className="plans-popup" onClick={e => e.stopPropagation()}>
                            <h2>Available Plans</h2>
                            <div className="plans-list">
                                {plans.map(plan => (
                                    <div key={plan.id} className="plan-item" onClick={() => {
                                        setFormValues(prev => ({
                                            ...prev,
                                            lifeCover: plan.coverage,
                                            planOptions: plan.name
                                        }));
                                        setShowPlansPopup(false);
                                    }}>
                                        <h3>{plan.name}</h3>
                                        <p className="plan-price">{plan.price}</p>
                                        <p>Coverage: {plan.coverage}</p>
                                        <ul>
                                            {plan.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                        <button className="select-plan-btn">Select Plan</button>
                                    </div>
                                ))}
                            </div>
                            <button className="close-popup" onClick={() => setShowPlansPopup(false)}>×</button>
                        </div>
                    </div>
                )}

                <form onSubmit={handleData}>
                    <div className="form-left-container">
                        <div className="form-left">
                            <div className="">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8m2teexzZwk8P7BEtQAGQoPHPABfX2-WFK0VmqO52w95DLgLaAvHJd9FnMKu3SNfXR9U&usqp=CAU" alt="buy" height={50} />
                                <span> e-Term Life</span>
                            </div>
                            <div className="horizontal-line"></div>

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-mutiple-checkbox-label">Life Cover</InputLabel>
                                <Select
                                    labelId="demo-mutiple-name-label"
                                    id="demo-mutiple-name"
                                    name="lifeCover"
                                    value={formValues.lifeCover}
                                    onChange={handleChange}
                                    MenuProps={MenuProps}
                                >
                                    <option value="25lakh">25 Lacs</option>
                                    <option value="50lakh">50 Lacs</option>
                                    <option value="75lakh">75 Lacs</option>
                                    <option value="1crore">1 Crore</option>
                                    <option value="1.25crore">1.25 Crore</option>
                                    <option value="1.5crore">1.5 Crore</option>
                                    <option value="1.75crore">1.75 Crore</option>
                                    <option value="2crore">2 Crore</option>
                                    <option value="2.25crore">2.25 Crore</option>   
                                    <option value="2.50crore">2.50 Crore</option>
                                    <option value="2.75crore">2.75 Crore</option>
                                    <option value="3crore">3 Crore</option>
                                    <option value="3.25crore">3.25 Crore</option>
                                    <option value="3.50crore">3.50 Crore</option>
                                    <option value="3.75crore">3.75 Crore</option>
                                    <option value="4crore">4 Crore</option>
                                    <option value="4.25crore">4.25 Crore</option>
                                    <option value="4.50crore">4.50 Crore</option>
                                    <option value="4.75crore">4.75 Crore</option>
                                    <option value="5crore">5 Crore</option>
                                    <option value="6crore">6 Crore</option>
                                </Select>
                            </FormControl>
                            <br />

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-mutiple-checkbox-label">Cover For</InputLabel>
                                <Select
                                    labelId="demo-mutiple-name-label"
                                    id="demo-mutiple-name"
                                    name="CoverFor"
                                    value={formValues.CoverFor}
                                    onChange={handleChange}
                                    MenuProps={MenuProps}
                                >
                                    <option value="32years">32 Years</option>
                                    <option value="33years">33 Years</option>
                                    <option value="34years">34 Years</option>
                                    <option value="35years">35 Years</option>
                                    <option value="36years">36 Years</option>
                                    <option value="37years">37 Years</option>
                                    <option value="38years">38 Years</option>
                                    <option value="39years">39 Years</option>
                                    <option value="40years">40 Years</option>
                                    <option value="41years">41 Years</option>
                                    <option value="42years">42 Years</option>
                                    <option value="43years">43 Years</option>
                                    <option value="44years">44 Years</option>
                                    <option value="45years">45 Years</option>
                                    <option value="46years">46 Years</option>
                                    <option value="47years">47 Years</option>
                                    <option value="48years">48 Years</option>
                                    <option value="49years">49 Years</option>
                                    <option value="50years">50 Years</option>
                                    <option value="51years">51 Years</option>
                                    <option value="52years">52 Years</option>
                                    <option value="53years">53 Years</option>
                                    <option value="54years">54 Years</option>
                                    <option value="55years">55 Years</option>
                                    <option value="60years">60 Years</option>
                                    <option value="75years">75 Years</option>
                                </Select>
                            </FormControl>
                            <br />

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-mutiple-checkbox-label">Pay For</InputLabel>
                                <Select onChange={handleChange} MenuProps={MenuProps} name="payFor">
                                    <option disabled value="" selected>Education</option>
                                    <option value="onetime">One Time</option>
                                    <option value="5years">5 Years</option>
                                    <option value="10years">10 Years</option>
                                    <option value="20years">20 Years</option>
                                </Select>
                            </FormControl>
                            <br />

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-mutiple-checkbox-label">Mode of Premium Payment</InputLabel>
                                <Select onChange={handleChange} MenuProps={MenuProps} name="paymentMode">
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="form-right-container">
                        <div>
                            <div className={classes.root}>
                                <Stepper activeStep={activeStep}>
                                    {steps.map((label, index) => {
                                        const stepProps = {};
                                        const labelProps = {};
                                        if (isStepOptional(index)) {
                                            labelProps.optional = <Typography variant="caption"></Typography>;
                                        }
                                        if (isStepSkipped(index)) {
                                            stepProps.completed = false;
                                        }
                                        return (
                                            <Step key={label} {...stepProps}>
                                                <StepLabel {...labelProps}>{label}</StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>
                                <div className="horizontal-line"></div>

                                <div>
                                    {activeStep === steps.length ? (
                                        <div>
                                            <Typography className={classes.instructions}>
                                                {navigate('/review')}
                                            </Typography>
                                            <Button onClick={handleReset} className={classes.button}>
                                                Reset
                                            </Button>
                                        </div>
                                    ) : (
                                        <div>
                                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                            <div>
                                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                                    Back
                                                </Button>
                                                {isStepOptional(activeStep) && (
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={handleSkip}
                                                        className={classes.button}
                                                    >
                                                        Skip
                                                    </Button>      
                                                )} 
                                                <motion.div
                                                    className="total-button-container"
                                                    animate={control}
                                                    onFocus={() => {
                                                        control.start({
                                                            y: -40,
                                                            transition: { duration: 2 }
                                                        });
                                                    }}
                                                >
                                                    <div className="total-amount-container">
                                                        <span>Total Amount</span>
                                                    </div>
                                                    <div className="button-container">
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            type="submit"
                                                            className={classes.button}
                                                            disabled={isLoading}
                                                        >
                                                            {isLoading ? 'Submitting...' : activeStep === steps.length - 1 ? 'Finish' : 'Proceed '} &#x279C;
                                                        </Button>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            {showThankYou && (
                                                <div className={classes.thankYouPopup}>
                                                    <div className={classes.thankYouContent}>
                                                        <h2>Thank You!</h2>
                                                        <p>Your details have been successfully submitted.</p>
                                                        <p>We will get back to you shortly.</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UseForm;