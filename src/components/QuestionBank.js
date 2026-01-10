const qBank = [
    {
        id: 1,
        question: "A system accepts an input value for 'Years of Experience' between 1 and 40. Using three-value boundary value analysis (BVA), which set of test cases should be used to verify the lower boundary?",
        options: ["0, 1, 2", "1, 2, 3", "0, 1, 40", "1, 2, 40"],
        answer: "0, 1, 2",
    },
    {
        id: 2,
        question: "A banking application requires a PIN that is exactly 4 digits long. Which of the following inputs would fall into the same 'Equivalence Partition' as the input '5555'?",
        options: ["9876", "123", "12345", "abcd"],
        answer: "9876",
    },
    {
        id: 3,
        question: "If a critical bug is found in a feature that is not required for the current release and won't be seen by users yet, how would you likely classify its Severity and Priority?",
        options: ["Severity: Critical, Priority: High", "Severity: High, Priority: Critical", "Severity: Medium, Priority: Medium", "Severity: Low, Priority: Low"],
        answer: "Severity: Critical, Priority: High",
    },
    {
        id: 4,
        question: "In the Bug Life Cycle, what is the status of a defect if a tester verifies a fix and finds that the original issue still persists?",
        options: ["Deferred", "Re-opened", "Rejected", "Closed"],
        answer: "Re-opened",
    },
    {
        id: 5,
        question: "Which phase of the Software Testing Life Cycle (STLC) involves mapping test cases to requirements using a Requirement Traceability Matrix (RTM)?",
        options: ["Test Case Development", "Test Planning", "Test Execution", "Test Closure"],
        answer: "Test Case Development",
    },
    {
        id: 6,
        question: "Which white-box testing metric ensures that every logical decision point in the code (e.g., if-statements) has been tested for both True and False outcomes?",
        options: ["Functional Coverage","Branch Coverage", "Statement Coverage", "Path Coverage"],
        answer: "Branch Coverage",
    },
    {
        id: 7,
        question: "During Top-Down Integration Testing, what is used to simulate a low-level module that has not yet been developed?",
        options: ["Driver", "Oracle", "Emulator", "Stub"],
        answer: "Stub",
    },
    {
        id: 8,
        question: "Beta Testing is a specific type of acceptance testing. Where is it typically performed?",
        options: ["In a controlled lab environment by external consultants", "By the developers during the coding phase", "At the developer's site by the testing team", "At the customer's own site by the end users"],
        answer: "At the customer's own site by the end users",
    },
    {
        id: 9,
        question: "Which of the following describes a 'Walkthrough' in the context of static testing?",
        options: ["A test performed by executing the code on a test server", "An automated scan of the source code to find syntax errors", "An informal session where the author leads the team through a document to gather feedback", "A formal process with a trained moderator and specific entry/exit criteria"],
        answer: "An informal session where the author leads the team through a document to gather feedback",
    },
    {
        id: 10,
        question: "Which testing type is most likely to be automated to ensure that existing features still function correctly after a new patch is applied?",
        options: ["Regression Testing", "Unit Testing", "Integration Testing", "System Testing"],
        answer: "Regression Testing",
    }
];

export default qBank;