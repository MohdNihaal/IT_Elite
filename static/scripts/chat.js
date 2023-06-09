// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Gets the first message
function firstBotMessage() {
  let firstMessage = "Hi! What do you need assistance in ( Blood donation and Blood based )?";
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = "What is Blood donation";
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(sampleText);
  }, 1000);
}

function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText("Heart clicked!");
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});

function getBotResponse(userText) {
  let lowercaseText = userText.toLowerCase();

  // Add more question-answer pairs here

if (lowercaseText.includes("what are the different types of blood donations")) {
    return "There are several types of blood donations, including: 1) Whole Blood Donation: The most common type, where a unit of whole blood is collected. 2) Platelet Donation: A procedure to collect platelets, which are important for clotting. 3) Plasma Donation: In this type, only plasma is collected, while other blood components are returned to the donor. 4) Double Red Cell Donation: This type collects red blood cells while returning the plasma and platelets to the donor.";
  }if (lowercaseText.includes("what is blood donation")) {
    return "Blood donation is the process of voluntarily giving blood to be used for transfusion to patients in need. It is a selfless act that helps save lives and improve health outcomes.";
  } else if (lowercaseText.includes("who can donate blood")) {
    return "Generally, individuals who are in good health, meet the minimum age and weight requirements, and don't have certain medical conditions can donate blood. However, eligibility criteria may vary by country and blood donation center.";
  } else if (lowercaseText.includes("what is blood donation")) {
    return "Blood donation is the process of voluntarily giving blood to be used for transfusion to patients in need. It is a selfless act that helps save lives and improve health outcomes.";
  } else if (lowercaseText.includes("how often can i donate blood")) {
    return "The frequency of blood donation depends on various factors, including the type of donation (whole blood or specific components), your overall health, and local regulations. In most cases, individuals can donate whole blood every 8 to 12 weeks, while other donation types may have different time intervals.";
  } else if (lowercaseText.includes("what are the benefits of blood donation")) {
    return "Blood donation has several benefits, including: 1) Helping save lives by providing blood for transfusions to individuals in need. 2) Stimulating the production of new blood cells, which can improve overall health. 3) Reducing the risk of certain health conditions, such as iron overload, by maintaining iron levels in the body. 4) Receiving a free health screening, including tests for blood pressure, hemoglobin levels, and infectious diseases.";
  } else if (lowercaseText.includes("how long does a blood donation take")) {
    return "The duration of a blood donation can vary, but it typically takes about 10 to 15 minutes for the actual blood collection process. The entire donation process, including registration, screening, and post-donation refreshments, usually takes around 45 minutes to an hour.";
  } else if (lowercaseText.includes("what should I do before donating blood")) {
    return "Before donating blood, it's important to: 1) Eat a nutritious meal and stay hydrated. 2) Get a good night's sleep. 3) Avoid alcohol and caffeinated beverages before the donation. 4) Bring a valid ID and any required documentation. 5) Disclose any relevant medical information during the screening process. Remember to follow the specific guidelines provided by your blood donation center.";
  } else if (lowercaseText.includes("is blood donation safe")) {
    return "Yes, blood donation is generally safe. Blood donation centers follow strict protocols to ensure donor safety and the safety of the donated blood. Donated blood goes through screening processes to detect infectious diseases. Additionally, trained healthcare professionals handle the donation process to minimize any risks.";
  } else if (lowercaseText.includes("can I donate blood if I have a tattoo or piercing")) {
    return "In many cases, having a tattoo or piercing does not automatically disqualify you from donating blood. However, some blood donation centers may have specific guidelines regarding recent tattoos or piercings. It's best to check with your local blood donation center to determine their policies.";
  } else if (lowercaseText.includes("what happens to donated blood")) {
    return "Donated blood goes through a series of steps before it is used for transfusions. After collection, the blood is tested for blood type, infectious diseases, and other markers. It is then processed into different blood components, such as red blood cells, platelets, and plasma. These components are stored appropriately and distributed to hospitals and healthcare facilities when needed.";
  } else if (lowercaseText.includes("what happens during a blood donation")) {
    return "During a blood donation, a healthcare professional will: 1) Cleanse the donation site. 2) Insert a sterile needle to collect blood. 3) Allow the blood to flow into a collection bag or container. 4) Monitor the donor's well-being throughout the process. 5) Provide post-donation care, such as applying a bandage and offering refreshments.";
  } else if (lowercaseText.includes("who benefits from blood donations")) {
    return "Various individuals benefit from blood donations, including: 1) Patients undergoing surgeries or medical procedures requiring blood transfusions. 2) Individuals with medical conditions such as anemia, cancer, or blood disorders. 3) Accident victims and trauma patients in need of emergency blood transfusions. 4) Premature babies and infants with medical complications. 5) People with chronic illnesses or immune disorders.";
  } else if (lowercaseText.includes("what are the common blood types")) {
    return "The common blood types are A, B, AB, and O. Each blood type can be Rh-positive or Rh-negative, resulting in eight possible blood type combinations. The presence or absence of certain antigens determines the blood type.";
  } else if (lowercaseText.includes("how is blood type determined")) {
    return "Blood type is determined by the presence or absence of specific antigens on red blood cells. ABO blood typing determines the presence of A and B antigens, while Rh typing determines the presence of the Rh antigen.";
  } else if (lowercaseText.includes("what is the universal blood donor")) {
    return "People with O negative (O-) blood type are considered universal donors. Their blood can be transfused to individuals of any blood type. O- blood type is in high demand during emergencies when the patient's blood type is unknown or in short supply.";
  } else if (lowercaseText.includes("what is the universal   blood recipient")) {
    return "People with AB positive (AB+) blood type are considered universal recipients. They can receive blood from individuals of any blood type. AB+ blood type is in high demand for plasma donations.";
  } else if (lowercaseText.includes("how long does it take to replenish donated blood")) {
    return "The body replenishes donated blood relatively quickly. The volume of plasma is restored within 24-48 hours, while red blood cells are replaced within a few weeks. However, it may take several weeks or months for the body to fully restore iron levels.";
  } else if (lowercaseText.includes("can I donate blood if I have a cold or flu")) {
    return "If you have a cold or flu, it's recommended to postpone your blood donation until you have fully recovered. This is to protect both the donor and the recipients from potential infections.";
  } else if (lowercaseText.includes("can I donate blood if I recently traveled abroad")) {
    return "Depending on the destination, there may be temporary deferrals for blood donation after traveling abroad. Some countries or regions with certain health risks may have specific guidelines. Check with your local blood donation center for their policies regarding recent travel.";
  } else if (lowercaseText.includes("what should I eat before donating blood")) {
    return "Before donating blood, it's recommended to eat a balanced meal that includes iron-rich foods, such as lean meat, leafy green vegetables, and legumes. Additionally, staying hydrated by drinking plenty of water is important.";
  } else if (lowercaseText.includes("what is apheresis donation")) {
    return "Apheresis donation is a specialized type of blood donation that allows the collection of specific blood components, such as platelets or plasma. During apheresis, blood is drawn from the donor, the desired components are separated, and the remaining blood components are returned to the donor. It's a longer process compared to whole blood donation.";
  } else if (lowercaseText.includes("how can I prepare for a platelet donation")) {
    return "Preparing for a platelet donation may involve avoiding certain medications, such as aspirin and nonsteroidal anti-inflammatory drugs (NSAIDs), as they can affect platelet function. It's important to follow the instructions provided by the blood donation center and inform them about any medications you are taking.";
  } else if (lowercaseText.includes("can I donate blood if I have diabetes")) {
    return "Having diabetes doesn't necessarily disqualify you from donating blood. However, if your diabetes is well-managed and you meet other eligibility criteria, you may be able to donate. It's important to disclose your diabetes and provide accurate information during the screening process.";
  } else if (lowercaseText.includes("what is the minimum age to donate blood")) {
    return "The minimum age to donate blood varies depending on the country and blood donation center. In many places, the minimum age is 17 or 18 years old. Some locations may allow 16-year-olds to donate with parental consent. Check with your local blood donation center for their specific age requirements.";
  } else if (lowercaseText.includes("how much blood is taken during a donation")) {
    return "The amount of blood taken during a donation depends on the type of donation. For a whole blood donation, approximately 1 pint (about 470 ml) is collected. Other donation types, such as platelet or plasma donation, may involve collecting specific components while returning the rest of the blood to the donor.";
  } else if (lowercaseText.includes("what happens if I'm deferred from donating blood")) {
    return "If you're deferred from donating blood, it means that you're temporarily unable to donate for a certain period. Deferrals can be due to various reasons, such as recent travel to certain countries, medical conditions, or certain medications. The deferral period varies depending on the reason. You can try to donate again once the deferral period has passed and you meet the eligibility criteria.";
  } else if (lowercaseText.includes("what is the process of blood transfusion")) {
    return "Blood transfusion is a medical procedure in which donated blood or its components are given to a recipient intravenously. The process involves matching the recipient's blood type with the compatible donor blood type, ensuring compatibility and safety. The transfusion is typically done in a healthcare setting by trained medical professionals.";
  } else if (lowercaseText.includes("can I donate blood if I have high blood pressure")) {
    return "In most cases, individuals with high blood pressure can donate blood as long as their blood pressure is under control and within acceptable limits. However, it's essential to disclose your condition and any medications you are taking during the screening process.";
  } else if (lowercaseText.includes("what are the benefits of donating blood")) {
    return "Donating blood has several benefits, including: 1) Helping save lives by providing blood for transfusions. 2) Potential health benefits for the donor, such as reducing iron levels. 3) The opportunity to contribute to the well-being of others and make a positive impact in the community.";
  } else if (lowercaseText.includes("can I donate blood if I have tattoos or piercings")) {
    return "In many cases, having tattoos or piercings doesn't disqualify you from donating blood. However, there may be temporary deferrals depending on the location and circumstances of the tattoo or piercing. This is to ensure the safety and integrity of the blood supply. Check with your local blood donation center for their specific guidelines.";
  } else if (lowercaseText.includes("how often can I donate blood")) {
    return "The frequency of blood donation varies depending on the country and blood donation center. In general, for whole blood donation, individuals can donate every 8 to 12 weeks. However, the specific guidelines may vary, and it's important to follow the recommended intervals to allow sufficient time for the body to replenish its blood supply.";
  } else if (lowercaseText.includes("what are the common side effects of donating blood")) {
    return "Common side effects of donating blood may include: 1) Fatigue or lightheadedness. 2) Bruising or soreness at the donation site. 3) Temporary changes in blood pressure. 4) Rarely, allergic reactions. It's important to rest, hydrate, and follow any post-donation instructions provided by the blood donation center.";
  } else if (lowercaseText.includes("can I donate blood if I'm pregnant")) {
    return "Pregnant individuals are usually not eligible to donate blood. Pregnancy puts extra strain on the body, and blood donation could potentially compromise the well-being of both the donor and the developing fetus. It's advisable to wait until after pregnancy and childbirth to donate blood.";
  } else if (lowercaseText.includes("what is the shelf life of donated blood")) {
    return "The shelf life of donated blood depends on the component. 1) Red blood cells: Typically, they can be stored for up to 42 days. 2) Platelets: These have a shorter shelf life of 5-7 days due to their delicate nature. 3) Plasma: It can be frozen and stored for up to a year. Proper storage conditions are crucial to maintain the quality and safety of donated blood.";
  } else if (lowercaseText.includes("can I donate blood if I'm on medication")) {
    return "Whether you can donate blood while on medication depends on the specific medication and its impact on the donation process and recipient safety. Some medications may require a temporary deferral, while others may not pose any restrictions. It's important to disclose all medications you are taking during the screening process.";
  } else if (lowercaseText.includes("what is the importance of blood type matching")) {
    return "Blood type matching is essential to ensure the compatibility and safety of blood transfusions. Mismatched blood types can trigger immune reactions, leading to potentially life-threatening complications. Matching the donor and recipient blood types minimizes the risk of adverse reactions and promotes successful transfusions.";
  } else if (lowercaseText.includes("what is the role of iron in blood donation")) {
    return "Iron is an essential component of red blood cells, and adequate iron levels are crucial for healthy blood donation. Low iron levels can lead to iron deficiency anemia and may make individuals temporarily ineligible to donate blood. It's important to maintain sufficient iron levels through a balanced diet or iron supplementation if necessary.";
  } else if (lowercaseText.includes("can I donate blood if I've had cancer")) {
    return "The eligibility to donate blood after cancer treatment depends on various factors, including the type of cancer, the stage of treatment, and the duration of remission. In some cases, individuals may be eligible to donate blood after a certain period of time has passed. It's important to disclose your medical history during the screening process.";
  } else if (lowercaseText.includes("are there any weight requirements for blood donation")) {
    return "Yes, there are weight requirements for blood donation. The specific weight requirements may vary depending on the country and blood donation center. The minimum weight is typically around 50-110 pounds (45-50 kilograms) to ensure the donor's well-being and minimize potential complications.";
  } else if (lowercaseText.includes("what are the signs of low iron levels")) {
    return "Signs of low iron levels, known as iron deficiency, may include: 1) Fatigue or weakness. 2) Pale skin or brittle nails. 3) Shortness of breath. 4) Dizziness or lightheadedness. 5) Difficulty concentrating. If you suspect low iron levels, it's important to consult a healthcare professional for proper evaluation and management.";
  } else if (lowercaseText.includes("how long does a blood donation appointment take")) {
    return "The duration of a blood donation appointment can vary. Typically, the process takes about 1 to 2 hours, including registration, screening, donation, and post-donation recovery. However, the actual time may vary depending on factors such as the type of donation, individual circumstances, and the efficiency of the blood donation center.";
  } else if (lowercaseText.includes("can I donate blood if I have hepatitis")) {
    return "Individuals with hepatitis may not be eligible to donate blood due to the potential transmission risk to recipients. Hepatitis B or C infections can be transmitted through blood transfusions. It's important to disclose your medical history and any relevant infections during the screening process.";
  } else if (lowercaseText.includes("what is autologous blood donation")) {
    return "Autologous blood donation involves donating your own blood for your own use in future medical procedures. This type of donation is typically planned in advance for elective surgeries or medical treatments. It ensures that the patient receives their own blood, minimizing the risk of adverse reactions or compatibility issues.";
  } else if (lowercaseText.includes("can I donate blood if I'm on antibiotics")) {
    return "If you're currently taking antibiotics, it may affect your eligibility to donate blood. Some antibiotics may cause temporary deferrals due to their potential impact on the donation process and recipient safety. It's important to disclose all medications you are taking during the screening process.";
  } else if (lowercaseText.includes("what is the importance of blood screening")) {
    return "Blood screening is a crucial step in ensuring the safety of donated blood. It involves testing donated blood for various infectious diseases, including HIV, hepatitis B and C, syphilis, and others. Screening helps identify potential infections and prevents the transmission of these diseases through blood transfusions.";
  } else if (lowercaseText.includes("can I donate blood if I have high cholesterol")) {
    return "High cholesterol alone doesn't disqualify you from donating blood. However, certain medications used to manage high cholesterol may have temporary deferrals. It's important to disclose your medical history and any medications you are taking during the screening process.";
  } else if (lowercaseText.includes("what is the maximum age to donate blood")) {
    return "The maximum age to donate blood varies depending on the country and blood donation center. In many places, there is no upper age limit as long as the individual meets other eligibility criteria. However, some locations may have specific age restrictions. Check with your local blood donation center for their guidelines.";
  } else if (lowercaseText.includes("can I donate blood if I have asthma")) {
    return "Having asthma doesn't necessarily disqualify you from donating blood. If your asthma is well-controlled and you meet other eligibility criteria, you may be able to donate. It's important to disclose your condition and provide accurate information during the screening process.";
  } else if (lowercaseText.includes("what is the role of blood in the body")) {
    return "Blood plays a vital role in the body, including: 1) Transporting oxygen and nutrients to tissues and organs. 2) Removing waste products and carbon dioxide. 3) Regulating body temperature. 4) Supporting the immune system by transporting white blood cells and antibodies. 5) Assisting in blood clotting to prevent excessive bleeding.";
  } else if (lowercaseText.includes("what is the importance of informed consent in blood donation")) {
    return "Informed consent is essential in blood donation to ensure that individuals fully understand the donation process, potential risks, and benefits. It allows donors to make voluntary and educated decisions about their participation. Informed consent promotes transparency, autonomy, and respect for the donor's rights.";
  } else if (lowercaseText.includes("can I donate blood if I have allergies")) {
    return "In most cases, having allergies doesn't disqualify you from donating blood. However, if you're experiencing active allergy symptoms or taking medications for severe allergies, you may be temporarily deferred. It's important to disclose your allergies and any medications you are taking during the screening process.";
  } else if (lowercaseText.includes("what is the importance of blood volume in donation")) {
    return "Blood volume is an important consideration in blood donation to ensure the donor's well-being and prevent complications. Donating too much blood in relation to the individual's body weight and overall blood volume can lead to adverse effects such as low blood pressure or dizziness. Blood donation centers follow specific guidelines to determine the safe amount to collect.";
  } else if (lowercaseText.includes("can I donate blood if I have a heart condition")) {
    return "Individuals with certain heart conditions may not be eligible to donate blood due to potential risks and complications. It's important to disclose your medical history and any existing heart conditions during the screening process.";
  } else if (lowercaseText.includes("what is the importance of post-donation care")) {
    return "Post-donation care is essential to ensure the donor's well-being and recovery after blood donation. It includes rest, hydration, and consuming nourishing food or snacks provided by the blood donation center. Post-donation care helps replenish fluids, restore energy levels, and minimize potential side effects.";
  } else if (lowercaseText.includes("can I donate blood if I've had a vaccine")) {
    return "Most vaccines don't disqualify you from donating blood. However, some vaccines may have temporary deferrals due to potential impacts on the donation process or recipient safety. It's important to disclose recent vaccinations during the screening process.";
  } else if (lowercaseText.includes("what is the importance of hemoglobin levels in blood donation")) {
    return "Hemoglobin is an iron-rich protein in red blood cells that carries oxygen throughout the body. Adequate hemoglobin levels are crucial for healthy blood donation, as low levels may indicate anemia. Blood donation centers measure hemoglobin levels to ensure the donor's well-being and the quality of the donated blood.";
  } else if (lowercaseText.includes("can I donate blood if I've had a recent surgery")) {
    return "If you've had recent surgery, you may be temporarily deferred from donating blood. The deferral period can vary depending on the type of surgery and individual circumstances. It's important to inform the blood donation center about your surgery during the screening process.";
  } else if (lowercaseText.includes("what is the role of white blood cells in blood donation")) {
    return "White blood cells play a crucial role in the immune system's defense against infections and diseases. In blood donation, white blood cells are one of the components present in whole blood or specific donation types. They help protect the recipient by fighting off potential pathogens and promoting a healthy immune response.";
  } else if (lowercaseText.includes("can I donate blood if I have a cold or flu")) {
    return "If you have a cold or flu, it's generally recommended to postpone blood donation until you have fully recovered. Donating blood while you're sick can potentially transmit the infection to others and may not be safe for you as a donor. It's important to prioritize your health and the safety of the blood supply.";
  } else if (lowercaseText.includes("how are you")) {
    return "I'm an AI, so I don't have feelings, but thank you for asking! How can I help you?";
  } else if (lowercaseText.includes("what is today's date")) {
    let today = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return "Today's date is " + today.toLocaleDateString(undefined, options) + ".";
  } else if (lowercaseText.includes("what is todays date")) {
    let today = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return "Today's date is " + today.toLocaleDateString(undefined, options) + ".";
  } else if (lowercaseText.includes("thank you")) {
    return "You're welcome! If you have any more questions, feel free to ask.";
  } else if (lowercaseText.includes("goodbye") || lowercaseText.includes("bye")) {
    return "Goodbye! Have a great day!";
  } else if (lowercaseText.includes("how does the chatbot work")) {
    return "The chatbot works by processing the user's input and generating a response based on predefined patterns and logic.";
  } else if (lowercaseText.includes("can you provide more information")) {
    return "Certainly! What specific information are you looking for?";
  } else if (lowercaseText.includes("what services do you offer")) {
    return "I can provide information, answer questions, and assist with various topics. Feel free to ask anything!";
  } else if (lowercaseText.includes("where are you located")) {
    return "I am a virtual chatbot, so I don't have a physical location. I exist online to help you.";
  } else if (lowercaseText.includes("how long have you been in operation")) {
    return "As an AI chatbot, I don't have a specific start date. I have been programmed to assist users and provide helpful information.";
  } else if (lowercaseText.includes("can you speak multiple languages")) {
    return "Yes, I can communicate in multiple languages including English, Spanish, French, and more.";
  } else if (lowercaseText.includes("what is your purpose")) {
    return "My purpose is to assist and provide information to users like yourself. How can I assist you today?";
  } else if (lowercaseText.includes("do you have a name")) {
    return "I am an AI chatbot, so I don't have a personal name. You can call me ChatBot.";
  } else if (lowercaseText.includes("can you help me with a technical issue")) {
    return "Yes, I can certainly try to help you with your technical issue. Please provide more details about the problem you're facing.";
  } else if (lowercaseText.includes("how do I contact support")) {
    return "To contact support, you can visit our website and find the 'Contact Us' page for more information.";
  } else if (lowercaseText.includes("what are your hours of operation")) {
    return "I am available 24/7 to assist you. Feel free to ask your questions at any time.";
  } else if (lowercaseText.includes("can you recommend a restaurant")) {
    return "Of course! Can you please specify your location or any specific cuisine preferences?";
  } else if (lowercaseText.includes("what is the meaning of life")) {
    return "The meaning of life can be subjective and varies for each individual. It's a philosophical question that has different interpretations.";
  } else if (lowercaseText.includes("can you tell me a joke")) {
    return "Sure, here's one for you: Why don't scientists trust atoms? Because they make up everything!";
  } else if (lowercaseText.includes("tell me a fun fact")) {
    return "Sure! Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!";
  } else if (lowercaseText.includes("what is your favorite movie")) {
    return "As an AI chatbot, I don't have personal preferences or emotions. However, I can recommend popular movies based on different genres if you'd like.";
  } else if (lowercaseText.includes("can you help me with my homework")) {
    return "I'll do my best to assist you with your homework. Please provide the details or specific question you need help with.";
  } else if (lowercaseText.includes("how do I reset my password")) {
    return "To reset your password, you can visit the login page and click on the 'Forgot Password' link. Follow the instructions provided to reset your password.";
  } else if (lowercaseText.includes("can you provide some health tips")) {
    return "Certainly! Here are a few health tips: eat a balanced diet, exercise regularly, get enough sleep, stay hydrated, and manage stress effectively.";
  } else if (lowercaseText.includes("what are your hobbies")) {
    return "As an AI chatbot, I don't have hobbies. My main focus is to assist users and provide helpful information.";
  } else if (lowercaseText.includes("how can I improve my productivity")) {
    return "To improve productivity, you can try setting clear goals, prioritizing tasks, eliminating distractions, managing your time effectively, and taking regular breaks.";
  } else if (lowercaseText.includes("can you recommend a book to read")) {
    return "Certainly! What genre or type of book are you interested in? Fiction, non-fiction, self-help, or something else?";
  } else if (lowercaseText.includes("what is the best way to learn a new language")) {
    return "The best way to learn a new language varies for each individual. However, some effective methods include immersing yourself in the language, practicing regularly, using language learning apps or courses, and engaging in conversation with native speakers.";
  }else if (lowercaseText.includes("hi")){
    return "Hello! How Can I Help You Today?"
  } else if (lowercaseText.includes("what is the capital of a specific country")) {
    // Handle capital city queries by extracting the country name
    let countryName = extractCountryName(lowercaseText);
    if (countryName) {
      let capitalCity = getCapitalCity(countryName);
      if (capitalCity) {
        return "The capital city of " + countryName + " is " + capitalCity + ".";
      } else {
        return "I'm sorry, but I couldn't find the capital city for " + countryName + ".";
      }
    } else {
      return "I'm sorry, I couldn't determine the country. Can you please specify the country name?";
    }
  } else if (lowercaseText.includes("what is the weather today")) {
    // Implement weather API integration to provide current weather information
    return "I'm sorry, I currently don't have access to real-time weather information. You can check a reliable weather website or use a weather app for accurate weather updates.";
  }  else {
    return "I'm sorry, I couldn't find an answer to your question. It's always best to consult with a healthcare professional or contact your local blood donation center for accurate and up-to-date information.";
  }
  
}
