function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    let regEx = /pet_[A-Z a-z 0-9]+$/;

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (regEx.test(input)){
            result = "🟩Valid Syntax👍🏾";
        } else {
            result = "🟥Invalid Syntax👎🏾";
        }
            document.getElementById('result').innerText = result;
}


