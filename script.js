    // Variables stored

const ratingButtonElement = document.querySelectorAll('.js-number');

const submitButtonElement = document.querySelector('.js-submit-btn');

const mainElement = document.querySelector('.js-main')

const ratingStateElement = document.querySelector('.js-rating-state');

const loadingStateElement = document.querySelector('.js-loading-state');

const thankyouStateElement = document.querySelector('.js-thankyou-state');

const ratingErrorTextElement = document.querySelector('.js-rating-error-info');


// Hide class added

addHideClass();

function addHideClass() {

  if (!loadingStateElement.classList.contains('hide') && !thankyouStateElement.classList.contains('hide')) 
  
  {

      loadingStateElement.classList.add('hide');
      thankyouStateElement.classList.add('hide');
      ratingErrorTextElement.classList.add('hide');


  }

  

}




// Storage for each selected rating

let selectedRating = '';


// Loop and fuction for each rating button

ratingButtonElement.forEach( (numberButton) => {

      numberButton.addEventListener('click', () => {
        selectedRating = numberButton.textContent;

        turnOffPreviousButton();

        if ( !numberButton.classList.contains('selected')){
          numberButton.classList.add('selected');
        } 

      })

  
});

console.log(selectedRating);

// Previous button turn off function

function turnOffPreviousButton() {

  const previousButton = document.querySelector('.selected');

  if (previousButton) {
    previousButton.classList.remove('selected');
  }
}

// Submit button addListener function

submitButtonElement.addEventListener( 'click', () => {

  if (selectedRating === '') {
      
    ratingErrorTextElement.classList.add('rating-error');

    ratingErrorTextElement.classList.remove('hide');

  } else { 
    
    if (!ratingStateElement.classList.contains('hide')) {

      ratingStateElement.classList.add('hide');

      loadingStateElement.classList.remove('hide')

    }
      loadingStateElement.innerHTML = `<span class="loading-state"> 
          Calculating your Rating...
      </span>`;
    
      mainElement.innerHTML = loadingStateElement.innerHTML;

      let addTimeOut;

      function thankyouFunction() {

        clearTimeout(addTimeOut);

        addTimeOut = setTimeout( () => {

             if (!loadingStateElement.classList.contains('hide')){
                loadingStateElement.classList.add('hide');

                loadingStateElement.classList.remove('loading-state');

                thankyouStateElement.classList.remove('hide');

             } 

             thankyouStateElement.innerHTML =`
             
             <div class ="thankyou-state">

             <img src="illustration-thank-you.svg" alt="">

             <p class = "selection-p">
              You selected <span> ${selectedRating}</span> out of 5
            </p>

             <h2>Thank you!</h2>
     
             <p class = "thankyou-note">
             We appreciate you taking the time to give a rating. If you ever need more support, 
             don’t hesitate to get in touch!
             </p>
     
           </div>  
             
            `

             mainElement.innerHTML = thankyouStateElement.innerHTML;
            
        }, 5000);

      }

      thankyouFunction();
    }
      
      

       
})