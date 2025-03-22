import React from 'react'
import CardItems from './CardItems'

function Card() {
    const features = [
        { title: "Regulatory Compliance and Reporting", description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements." },
        { title: "Meeting Sustainability Goals and Net-Zero Targets", description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements." },
        { title: "Cost Savings and Operational Efficiency", description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements." },
        { title: "Investor and Consumer Expectations", description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements." },
        { title: "Climate Risk Management", description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements." },
        { title: "Strengthening Brand Reputation and Market Leadership", description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements." },
      ];
  return (
    <div className="container mx-auto px-6 mt-10">
  
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((item, index) => (
        <li key={index}>
          <CardItems title={item.title} description={item.description} />
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Card
