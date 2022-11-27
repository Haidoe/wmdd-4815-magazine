let responseStatus = true;

const handleFormSubmit = async (evt) => {
  evt.preventDefault();
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending';

  const formData = new FormData(evt.target);

  try {
    const response = await fetch(evt.target.action, {
      method: formSubmit.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw true;
    }

    formSubmit.reset();
    responseStatus = response.ok;
    overlay.classList.toggle("show");
    successOverlayContent.classList.toggle("show");
  } catch (error) {
    responseStatus = false;
    overlay.classList.toggle("show");
    failOverlayContent.classList.toggle("show");
  } finally {
    submitBtn.innerHTML = "Send Mail";
  }
};

formSubmit.addEventListener("submit", handleFormSubmit);

overlayCloseBtn.addEventListener("click", () => {
  overlay.classList.toggle("show");

  if (responseStatus) {
    successOverlayContent.classList.toggle("show");
  } else {
    failOverlayContent.classList.toggle("show");
  }
});
