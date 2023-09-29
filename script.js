const questions = [
    {
        question: "What is the first digital currency?",
        answers: [
            { text: "Ethereum", correct: false },
            { text: "Pepe", correct: false },
            { text: "Bitcoin", correct: true },
            { text: "Solana", correct: false },
        ]
    },
    {
        question: "Who is the pseudonymous creator of Bitcoin and authored the Bitcoin whitepaper in 2008?",
        answers: [
            { text: "Satoshi Nakamoto", correct: true },
            { text: "Vitalik Buterin", correct: false },
            { text: "Charlie Lee", correct: false },
            { text: "Roger Ver", correct: false },
        ]
    },
    {
        question: "Which consensus algorithm does the cryptocurrency Ethereum 2.0 (Serenity) use to secure its network and validate transactions?",
        answers: [
            { text: "Proof of Work (PoW)", correct: false },
            { text: "Delegated Proof of Stake (DPoS)", correct: false },
            { text: "Proof of Stake (PoS)", correct: true },
            { text: "Proof of Authority (PoA)", correct: false },
        ]
    },
    {
        question: "What is the primary purpose of a 'smart contract' in the context of blockchain technology?",
        answers: [
            { text: "Storing user funds securely", correct: false },
            { text: "Facilitating peer-to-peer cryptocurrency trading", correct: false },
            { text: "Executing self-executing, tamper-proof contracts on the blockchain", correct: true },
            { text: "Verifying the identity of blockchain users", correct: false },
        ]
    },     
       {
            question: "What cryptographic hash function is used in the creation of Bitcoin addresses?",
            answers: [
                { text: "SHA-256", correct: true },
                { text: "MD5", correct: false },
                { text: "SHA-1", correct: false },
                { text: "SHA-512", correct: false },
            ]
        },
        {
            question: "What is the concept of 'ring signatures' in the context of privacy-focused cryptocurrencies like Monero?",
            answers: [
                { text: "Multiple signatures required for a transaction", correct: false },
                { text: "Anonymous transaction mixing", correct: true },
                { text: "Digital signatures from a group of users", correct: false },
                { text: "Blockchain consensus algorithm", correct: false },
            ]
        },
        {
            question: "What is the main purpose of a 'turing-complete' blockchain platform like Ethereum?",
            answers: [
                { text: "Faster transaction processing", correct: false },
                { text: "Supports complex smart contracts and decentralized applications", correct: true },
                { text: "Enhanced security protocols", correct: false },
                { text: "Exclusive mining rights", correct: false },
            ]
        },
        {
            question: "What is the Lightning Network in the context of Bitcoin?",
            answers: [
                { text: "A Bitcoin mining algorithm", correct: false },
                { text: "A second-layer solution for faster and cheaper transactions", correct: true },
                { text: "A Bitcoin wallet app", correct: false },
                { text: "A protocol for cross-chain transactions", correct: false },
            ]
        },
        {
            question: "What is the purpose of 'zero-knowledge proofs' in blockchain technology?",
            answers: [
                { text: "Securing private keys", correct: false },
                { text: "Verifying user identities", correct: false },
                { text: "Proving a statement is true without revealing specific information", correct: true },
                { text: "Preventing double-spending attacks", correct: false },
            ]
        },
        {
            question: "Which cryptocurrency uses the 'XRP Ledger' and is designed for fast, low-cost cross-border payments?",
            answers: [
                { text: "Ethereum", correct: false },
                { text: "Ripple (XRP)", correct: true },
                { text: "Litecoin", correct: false },
                { text: "Stellar", correct: false },
            ]
        },
        {
            question: "What is the concept of 'tokenization' in the context of blockchain?",
            answers: [
                { text: "Converting digital assets into physical assets", correct: false },
                { text: "Creating digital representations of real-world assets on the blockchain", correct: true },
                { text: "Encrypting blockchain transactions", correct: false },
                { text: "Mining new cryptocurrency tokens", correct: false },
            ]
        },
        {
            question: "What is the difference between a 'hard fork' and a 'soft fork' in blockchain terminology?",
            answers: [
                { text: "Hard fork is a software upgrade that is not backward-compatible, while soft fork is backward-compatible", correct: true },
                { text: "Hard fork is reversible, while soft fork is irreversible", correct: false },
                { text: "Hard fork does not require consensus, while soft fork requires consensus", correct: false },
                { text: "Hard fork is a temporary blockchain split, while soft fork is a permanent split", correct: false },
            ]
        },
        {
            question: "What is the primary purpose of 'Masternodes' in certain cryptocurrency networks like Dash?",
            answers: [
                { text: "Processing transactions", correct: false },
                { text: "Securing the network through advanced encryption", correct: false },
                { text: "Enabling instant and private transactions", correct: true },
                { text: "Creating new cryptocurrency tokens", correct: false },
            ]
        },
        {
            question: "What is the term used to describe the process of verifying and adding transactions to the public ledger in proof-of-stake (PoS) cryptocurrencies?",
            answers: [
                { text: "Mining", correct: false },
                { text: "Forging", correct: true },
                { text: "Staking", correct: false },
                { text: "Hashing", correct: false },
            ]
        },
            {
                question: "What is Bitcoin?",
                answers: [
                    { text: "A digital currency", correct: true },
                    { text: "A physical coin", correct: false },
                    { text: "A stock market", correct: false },
                    { text: "A bank", correct: false },
                ]
            },
            {
                question: "What is blockchain?",
                answers: [
                    { text: "A chain made of blocks", correct: false },
                    { text: "A decentralized digital ledger", correct: true },
                    { text: "A type of cryptocurrency", correct: false },
                    { text: "A computer network", correct: false },
                ]
            },
            {
                question: "Who is the creator of Bitcoin?",
                answers: [
                    { text: "Satoshi Nakamoto", correct: true },
                    { text: "Vitalik Buterin", correct: false },
                    { text: "Mark Zuckerberg", correct: false },
                    { text: "Elon Musk", correct: false },
                ]
            },
            {
                question: "What does ICO stand for?",
                answers: [
                    { text: "International Currency Organization", correct: false },
                    { text: "Initial Coin Offering", correct: true },
                    { text: "Internet Cryptocurrency Operation", correct: false },
                    { text: "Innovative Crypto Outreach", correct: false },
                ]
            },
            {
                question: "Which cryptocurrency is known for its privacy features?",
                answers: [
                    { text: "Bitcoin", correct: false },
                    { text: "Ethereum", correct: false },
                    { text: "Monero", correct: true },
                    { text: "Litecoin", correct: false },
                ]
            },
            {
                question: "What is the process of 'mining' in the context of cryptocurrencies?",
                answers: [
                    { text: "Extracting physical coins from the ground", correct: false },
                    { text: "Solving complex mathematical puzzles to validate transactions", correct: true },
                    { text: "Creating new cryptocurrencies", correct: false },
                    { text: "Exchanging cryptocurrencies for cash", correct: false },
                ]
            },
            {
                question: "What is a 'wallet' in the context of cryptocurrencies?",
                answers: [
                    { text: "A physical case for storing cryptocurrencies", correct: false },
                    { text: "A digital tool for storing and managing cryptocurrencies", correct: true },
                    { text: "A bank account specifically for cryptocurrencies", correct: false },
                    { text: "A type of cryptocurrency", correct: false },
                ]
            },
            {
                question: "What is the total supply limit of Bitcoin?",
                answers: [
                    { text: "21 million", correct: true },
                    { text: "100 million", correct: false },
                    { text: "1 billion", correct: false },
                    { text: "Unlimited", correct: false },
                ]
            },
            {
                question: "What is a 'fork' in the context of cryptocurrencies?",
                answers: [
                    { text: "A tool for eating food", correct: false },
                    { text: "A split in the blockchain, creating two separate versions", correct: true },
                    { text: "A type of cryptocurrency transaction", correct: false },
                    { text: "A security feature in wallets", correct: false },
                ]
            },
            {
                question: "What is a 'smart contract'?",
                answers: [
                    { text: "A legally binding agreement with cryptocurrencies", correct: false },
                    { text: "A self-executing contract with the terms of the agreement between buyer and seller being directly written into code", correct: true },
                    { text: "A contract for buying cryptocurrencies at a specific price", correct: false },
                    { text: "A contract for mining cryptocurrencies", correct: false },
                ]
            }
        ];
        

    



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again"
    const followMessage = document.createElement("p");
    followMessage.textContent = "Follow Saim Misbahu on Facebook";
    followMessage.style.fontWeight = "bold";
    followMessage.style.marginTop = "20px";
    answerButtons.appendChild(followMessage);
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
