const startBtn = document.querySelector(".btn_start");
const formBtn = document.querySelector(".btn_form");
const closeBtn = document.querySelector(".btn_close");
const nextBtn = document.querySelector(".btn_next");

const spinner = document.querySelector(".spinner");

const numberInput = document.querySelector(".auth_input_number");
const codeInput = document.querySelector(".auth_input_code");
const errorNumber = document.querySelector(".error_number");
const errorCode = document.querySelector(".error_code");

const firstPage = document.querySelector(".first_page");
const secondPage = document.querySelector(".second_page");

const modalShadow = document.querySelector(".modal_shadow");

const numberRegex = /^[0-9]{9}$/;
const codeRegex = /^[0-9]{4}$/;

const pickupParcel = () => {
	firstPage.style.display = "none";
	secondPage.style.display = "block";
	startBtn.style.display = "block";
};

const showModal = () => {
	if (!(modalShadow.style.display === "block")) {
		modalShadow.style.display = "block";
	} else {
		modalShadow.style.display = "none";
	}
	modalShadow.classList.add("modal-animation");
};

const resetInputs = () => {
	numberInput.value = "";
	codeInput.value = "";
};

const backToForm = () => {
	resetInputs();
	modalShadow.style.display = "none";
};

const backToStart = () => {
	resetInputs();
	modalShadow.style.display = "none";
	firstPage.style.display = "block";
	secondPage.style.display = "none";
	startBtn.style.display = "block";
};

startBtn.addEventListener("click", pickupParcel);
formBtn.addEventListener("click", () => {
	if (!numberRegex.test(numberInput.value)) {
		errorNumber.textContent = "Błędny numer telefonu!";
	} else {
		errorNumber.textContent = "";
	}
	if (!codeRegex.test(codeInput.value)) {
		errorCode.textContent = "Błędny kod!";
	} else {
		errorCode.textContent = "";
	}
	if (numberRegex.test(numberInput.value) && codeRegex.test(codeInput.value)) {
		setTimeout(() => {
			showModal();
		}, 1000);
	}
});

nextBtn.addEventListener("click", backToForm);
closeBtn.addEventListener("click", backToStart);
