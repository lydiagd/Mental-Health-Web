var firestore = firebase.firestore();

/* Retrives the user's UUID */
function getUserID ()
{
    return firebase.auth().currentUser.uid;
}

/* Stories doc-ref */
const storiesRef = firestore.collection ("stories");
/* Form elements in LogForm.html */
const tagSelectField = document.querySelector ('#tag-select');
const happinessField = document.querySelector ('#happiness');
const descriptionField = document.querySelector ('#description');
const button = document.querySelector ('#submit');

button.addEventListener ("click", function () {
    const tag = tagSelectField.value;
    const happiness = happinessField.value;
    const description = descriptionField.value;
    const uuid = getUserID();
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();

    /* NULL check */
    if (!tag || !happiness || !description || !uuid || !timestamp)
    {
        alert ("At least one or more fields are empty.");
        return;
    }

    /* Ensures that happiness is between one and ten */
    if (! (happiness >= 1 && happiness <= 10))
    {
        alert ("Your happiness rating must be between one and ten.");
        return;
    }

    storiesRef.add ({
        user_id: uuid,
        happiness: happiness,
        description: description,
        timestamp: timestamp,
        tag: tag
    }).then (function() { 
        console.log ("SUCCESS!");
        // window.location.replace ('https://mental-health-web.web.app/dashboard');
    }).catch (function (error) {
        console.log (error);
    });
});
