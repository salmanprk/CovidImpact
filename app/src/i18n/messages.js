const messages = {
  en: {
    message: {
      loading: "Loading",
      learnMore: "Learn More",
      language_english: "English",
      language_french: "Français",
      language_chinese: "简体中文",
      covidImpact: "#CovidImpact",
      privacyPolicy: "Privacy Policy",
      disclaimer: "Disclaimer",
      contactUs: "Contact Us!",
      callToAction_signUp:
        "Sign-up for the latest updates and small business tools!",
      callToAction_sending: "Sending..",
      callToAction_send: "Send",
      hero_businessCarePackage: "COVID-19 Business Care Package",
      hero_welcome:
        'Welcome to your Small Business Care Bundle brought to you by the <b-link href="http://www.fostrum.com"> <b>Fostrum </b> </b-link>Team. <br /> <br />CovidImpact is a FOSS (free and open-source) website that aims to keep small business owners informed during the pandemic by providing an up-to-date list of financial programs, news, and an assessment tool to simulate the impact of Coronavirus on your business.',
      hero_financialCard: "Financial Card",
      hero_businessAssessmentTool: "Business Assessment Tool",
      hero_newsForBusinesses: "COVID-19 News for Businesses",
      aidItem_card1:
        "The government is proposing to provide eligible small employers a temporary wage subsidy for a period of three months. The subsidy will be equal to 10% of remuneration paid during that period, up to a maximum subsidy of $1,375 per employee and $25,000 per employer This is done by reducing your remittances of income tax withheld on your employees’ remuneration.",
      aidItem_card1Title: "Wage Subsidy Program",
      aidItem_card2:
        "If your employees are eligible for Employment Insurance (EI) benefits, and your business is suffering a downturn due to COVID-19, you can apply for a work-sharing agreement. The agreement would allow them to work a temporarily reduced work week while receiving EI benefits.",
      aidItem_card2Title: "Wage Share Program",
      aidItem_card3:
        "The government is providing $2,000 a month for up to four months for small business owners and entrepreneurs who are not receiving a paycheck as a result of COVID-19.",
      aidItem_card3Title: "Canada Emergency Response Benefit Program",
      aidItem_card4:
        "The CRA will allow all businesses to defer, until after August 31, 2020, the payment of any income tax amounts that become owing on or after today and before September 2020. No interest or penalties will accumulate on these amounts during this period. For self-employed, the tax deadline is extended from June 15th to July 31st.",
      aidItem_card4Title: "Tax Deferments",
      aidItem_card5:
        "Through this program, Export Development Canada (EDC) and the Business Development Bank of Canada (BDC) will provide more than $10 billion in direct lending and other types of financial support at market rates to viable small businesses. BDC and EDC, both financial Crown corporations, will work closely with private sector lenders to improve access to financing for Canadian businesses.",
      aidItem_card5Title: "Business Credit Availability Program",
      analytics_header:
        "Please enter the following and click 'Compute' to get your impact assessment report...",
      analytics_list1Hover:
        "Current balance or current net profit up until the most recent month.",
      analytics_list1: "Current Cash-On-Hand",
      analytics_list2Hover: "Approximate monthly revenue for your firm.",
      analytics_list2: "Average Monthly Revenue",
      analytics_list3Hover: "Approximate monthly company expenses.",
      analytics_list3: "Average Monthly Expenses",
      analytics_input1: "Cash On Hand",
      analytics_input2: "Monthly Revenue",
      analytics_input3: "Monthly Expenses",
      analytics_compute: "Compute",
      analytics_inputForm: "Input Form",
      analytics_currentCashOnHand: "Current Cash-On-Hand",
      analytics_cashAtHand: "Cash-At-Hand",
      analytics_averageMonthlyRevenue: "Average Monthly Revenue",
      analytics_monthlyRevenue: "Monthly Revenue",
      analytics_averageMonthlyExpenses: "Average Monthly Expenses",
      analytics_monthlyReductionInRevenue: "Monthly Reduction In Revenue",
      analytics_recompute: "Re-compute",
      analytics_cashBalance: "Cash Balance",
      footer1:
        "Your privacy is important to us. It is #CovidImpact policy to respect your privacy regarding any information we may collect from you across our website, https://covidimpact.com, and other sites we own and operate. We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification. We don’t share any personally identifying information publicly or with third-parties, except when required to by law. Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies. You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us. This policy is effective as of 10 March 2020.",
      footer2:
        "The information provided through Fostrum's assessment tool does not constitute legal, tax, financial, or accounting advice, and should not be considered a substitute for obtaining competent personalized advice from a licensed professional. You should seek professional advice before making any decision that could affect the financial health of your business. <br />The content of this website does not constitute medical advice. The information provided above is meant as a suggestion for concerned individuals to follow a loose set of guidelines based on best practices and anecdotal evidence to protect themselves and their loved ones. There is no guarantee or scientific evidence that following the mentioned guidelines will lead to a reduction in new infections or even stop the COVID-19 epidemic. There is also no guarantee that following these guidelines will reduce the risk of getting infected with SARS-CoV-2 or any other viral or bacterial contagion. All information provided on this website is given with the best intent and will to provide factual information. In no event shall the website operators be held liable for any claim, damages, or other liabilities. If you have concerns or comments about the information provided on this website, please write to your regional or federal government.",
      newsList_latestNews: "Latest News",
      newsList_relevantEvents: "Relevant events for your business",
      newsList_outlook: "News Outlook: ",
      newsList_source: "Source link",
      //newsList_outlookDescription: "😃 the outlook is hopeful\n😐the outlook is neutral\n🙁 the outlook is not good",
      newsList_outlookDescription:
        "The news sentiment and outlook is hopeful 😃",
      prepare_header: "Prepare",
      prepare_form: "Here's what you need to run your impact assessment:",
      prepare_list1Hover:
        "Current balance or current net profit up until the most recent month.",
      prepare_list1: "Cash-At-Hand",
      prepare_list2Hover: "Approximate monthly revenue for your firm.",
      prepare_list2: "Monthly Revenue",
      prepare_list3Hover: "Approximate monthly company expenses.",
      prepare_list3: "Monthly Costs",
      riskLevel: "Risk Level",
      runway_expectedRunway: "Your expected runway",
      runway_monthOrLess: "Month or Less",
      runway_12months: "12 months +",
      runway_months: "months",
      timeline_header: "Timeline of Events: Canadian Businesses",
      timeline_content:
        "Here’s a timeline of events every business owner in Canada should be aware of:",
      assessment_header: "Assessment",
      assessment_findOut: "Find out how COVID-19 may affect your cashflow",
      assessment_analytics:
        "This cashflow forecasting tool was created by the team at Fostrum Financial Technologies. Learn more about other cool projects we're up to <a href='http://www.fostrum.com'><b>here</b></a>.",
      financialAid_header: "Financial Aid",
      financialAid_content:
        "A current list of financial aid from our government. Click on a card for more info and to be directed into the official page.",
    },
  },
  ru: {
    message: {
      learnMore: "Узнать больше",
      language_english: "English",
      language_french: "Français",
      language_chinese: "简体中文",
      covidImpact: "#CovidImpact",
      privacyPolicy: "Политика Конфиденциальности",
      disclaimer: "Предупреждение",
      contactUs: "Обратная Связь",
      callToAction_signUp:
        "Подпишитесь на последние новости и получите доступ к инструментам для вашего бизнеса!",
      callToAction_sending: "Отправляю..",
      callToAction_send: "Отправлено",
      hero_businessCarePackage: "COVID-19 Программа помощи бизменсам",
      hero_welcome:
        'Добро пожаловать в ваш собственный пакет помощи для малых бизнесов тщательно подготовленный коммандой <b-link href="http://www.fostrum.com"> <b>Fostrum </b> </b-link>. <br /> <br />CovidImpact помогает иммунной системе вашего бизнеса с помощью программ финансовой поддержки, новостей и онлайн инструментов помогающих понять влияние коронавируса на ваш бизнесс!',
      hero_financialCard: "Финансовая Карта",
      hero_businessAssessmentTool: "Инструмента для Оценки Вашего Бизнесса",
      hero_newsForBusinesses: "COVID-19 Новости для Бизнесса",
      aidItem_card1:
        "The government is proposing to provide eligible small employers a temporary wage subsidy for a period of three months. The subsidy will be equal to 10% of remuneration paid during that period, up to a maximum subsidy of $1,375 per employee and $25,000 per employer This is done by reducing your remittances of income tax withheld on your employees’ remuneration.",
      aidItem_card1Title: "Wage Subsidy Program",
      aidItem_card2:
        "If your employees are eligible for Employment Insurance (EI) benefits, and your business is suffering a downturn due to COVID-19, you can apply for a work-sharing agreement. The agreement would allow them to work a temporarily reduced work week while receiving EI benefits.",
      aidItem_card2Title: "Wage Share Program",
      aidItem_card3:
        "The government is providing $2,000 a month for up to four months for small business owners and entrepreneurs who are not receiving a paycheck as a result of COVID-19.",
      aidItem_card3Title: "Canada Emergency Response Benefit Program",
      aidItem_card4:
        "The CRA will allow all businesses to defer, until after August 31, 2020, the payment of any income tax amounts that become owing on or after today and before September 2020. No interest or penalties will accumulate on these amounts during this period. For self-employed, the tax deadline is extended from June 15th to July 31st.",
      aidItem_card4Title: "Tax Deferments",
      aidItem_card5:
        "Through this program, Export Development Canada (EDC) and the Business Development Bank of Canada (BDC) will provide more than $10 billion in direct lending and other types of financial support at market rates to viable small businesses. BDC and EDC, both financial Crown corporations, will work closely with private sector lenders to improve access to financing for Canadian businesses.",
      aidItem_card5Title: "Business Credit Availability Program",
      analytics_header:
        "Please enter the following and click 'Compute' to get your impact assessment report...",
      analytics_list1Hover:
        "Current balance or current net profit up until the most recent month.",
      analytics_list1: "Current Cash-On-Hand",
      analytics_list2Hover: "Approximate monthly revenue for your firm.",
      analytics_list2: "Average Monthly Revenue",
      analytics_list3Hover: "Approximate monthly company expenses.",
      analytics_list3: "Average Monthly Expenses",
      analytics_input1: "Cash On Hand",
      analytics_input2: "Monthly Revenue",
      analytics_input3: "Monthly Expenses",
      analytics_compute: "Compute",
      analytics_inputForm: "Input Form",
      analytics_currentCashOnHand: "Current Cash-On-Hand",
      analytics_cashAtHand: "Cash-At-Hand",
      analytics_averageMonthlyRevenue: "Average Monthly Revenue",
      analytics_monthlyRevenue: "Monthly Revenue",
      analytics_averageMonthlyExpenses: "Average Monthly Expenses",
      analytics_monthlyReductionInRevenue: "Monthly Reduction In Revenue",
      analytics_recompute: "Re-compute",
      analytics_cashBalance: "Cash Balance",
      footer1:
        "Your privacy is important to us. It is #CovidImpact policy to respect your privacy regarding any information we may collect from you across our website, https://covidimpact.com, and other sites we own and operate. We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification. We don’t share any personally identifying information publicly or with third-parties, except when required to by law. Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies. You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us. This policy is effective as of 10 March 2020.",
      footer2:
        "The information provided through Fostrum's assessment tool does not constitute legal, tax, financial, or accounting advice, and should not be considered a substitute for obtaining competent personalized advice from a licensed professional. You should seek professional advice before making any decision that could affect the financial health of your business. <br />The content of this website does not constitute medical advice. The information provided above is meant as a suggestion for concerned individuals to follow a loose set of guidelines based on best practices and anecdotal evidence to protect themselves and their loved ones. There is no guarantee or scientific evidence that following the mentioned guidelines will lead to a reduction in new infections or even stop the COVID-19 epidemic. There is also no guarantee that following these guidelines will reduce the risk of getting infected with SARS-CoV-2 or any other viral or bacterial contagion. All information provided on this website is given with the best intent and will to provide factual information. In no event shall the website operators be held liable for any claim, damages, or other liabilities. If you have concerns or comments about the information provided on this website, please write to your regional or federal government.",
      newsList_latestNews: "Latest News",
      newsList_relevantEvents: "Relevant events for your business",
      prepare_header: "Prepare",
      prepare_form: "Here's what you need to run your impact assessment:",
      prepare_list1Hover:
        "Current balance or current net profit up until the most recent month.",
      prepare_list1: "Cash-At-Hand",
      prepare_list2Hover: "Approximate monthly revenue for your firm.",
      prepare_list2: "Monthly Revenue",
      prepare_list3Hover: "Approximate monthly company expenses.",
      prepare_list3: "Monthly Costs",
      riskLevel: "Risk Level",
      runway_expectedRunway: "Your expected runway",
      runway_monthOrLess: "Month or Less",
      runway_12months: "12 months +",
      runway_months: "months",
      timeline_header: "Timeline of Events: Canadian Businesses",
      timeline_content:
        "Here’s a timeline of events every business owner in Canada should be aware of:",
    },
  },
};

export default messages;
