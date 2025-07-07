import { NextRequest, NextResponse } from 'next/server';
// @ts-expect-error: No types for nodemailer in this project
import nodemailer from 'nodemailer';

// Define the questions array (should match the frontend)
const questions = [
  "How would you describe your immunity level?",
  "Is any family member suffering from a chronic or incurable disease?",
  "Has anyone in your home been experiencing long-term depression?",
  "Do you suffer from sleep disturbances or insomnia?",
  "Are there frequent stomach-related health issues in your family?",
  "Is anyone in the house diagnosed with thyroid problems?",
  "Do you find it difficult to forget painful or traumatic memories?",
  "Is your ongoing medication showing little or no effect?",
  "Does anyone suffer from breathing or respiratory issues (e.g., asthma, allergies)?",
  "Do you often feel mentally restless or anxious at home without any clear reason? (Optional)",
  "Do you feel emotionally heavy, angry, or irritated more often since shifting to this house? (Optional)",
  "Have you faced major career setbacks since moving into your current home?",
  "Do you feel that you're not getting the desired growth in your career?",
  "How often do you face conflicts with seniors or superiors at work?",
  "Do you feel a lack of new opportunities in life or career?",
  "Have you experienced any major financial or professional loss after shifting here?",
  "Do you feel unable to meet your personal/professional targets?",
  "Are you currently facing cash flow problems or financial instability?",
  "Do you feel money is being spent unnecessarily or without control?",
  "Have your debts increased after moving to this house or after renovation?",
  "Do you feel your savings are constantly getting drained?",
  "Is any of your payment stuck or delayed significantly?",
  "Have you experienced any major accidents or theft since moving here?",
  "Are you entangled in long-standing court cases or legal matters?",
  "Do you feel insecure or uncertain about your future?",
  "Do you feel confused while making major life decisions?",
  "Do you feel your hard work doesn't bring desired results?",
  "Does your work often get stuck or fail at the last moment?",
  "Do you feel your efforts go unrecognized in personal or professional life?",
  "Are you experiencing relationship issues within or outside the family?",
  "Are there any concerns related to your children? (Optional)",
  "Do you experience frequent arguments among family members?",
  "Are you facing difficulty in conceiving or going through a difficult pregnancy? (Optional)",
  "How would you describe your relationship with your spouse/partner? (Optional)",
  "Do you feel disconnected from spiritual practices or inner peace after moving here? (Optional)",
  "Do you sense heaviness, dullness, or lack of freshness in the house atmosphere? (Optional)",
  "Do guests or friends avoid visiting or seem uncomfortable staying at your place? (Optional)",
  "Do plants in your home struggle to survive or stay healthy for long? (Optional)",
  "Do pets (if any) show signs of discomfort or frequent illness in the house? (Optional)",
  "Do you feel your home gets cluttered easily or stays disorganized despite efforts? (Optional)",
  "Does your home feel unusually dark or lack natural sunlight during the day? (Optional)",
  "Do you avoid spending time in certain areas/rooms of your house without any clear reason? (Optional)"
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, answers, grade, scorePercent } = body;

    // Configure your SMTP transport (replace with your credentials)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Map questions to answers for email
    const answerList = questions.map((q, idx) => {
      const ans = answers && answers[idx] ? answers[idx] : 'Not Answered';
      return `<b>Q${idx + 1}:</b> ${q}<br/><b>Answer:</b> ${ans}<br/><br/>`;
    }).join('');

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || 'no-reply@vaastusanjivanii.com',
      to: [process.env.SMTP_TO || 'mail@vaastusanjivanii.com', email], // send to admin and user
      subject: `Vastu Questionnaire Result - ${name || 'Anonymous'}`,
      html: `
        <h2>Vastu Questionnaire Submission</h2>
        <p><b>Name:</b> ${name || 'N/A'}</p>
        <p><b>Email:</b> ${email || 'N/A'}</p>
        <p><b>Phone:</b> ${phone || 'N/A'}</p>
        <p><b>Score:</b> ${scorePercent}%</p>
        <p><b>Grade:</b> ${grade}</p>
        <h3>Answers:</h3>
        <div>${answerList}</div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
} 