// Load saved recommendations from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  loadSavedRecommendations();
});
function addRecommendation() {
  // Get the message and author name of the new recommendation
  const recommendation = document.getElementById("new_recommendation");
  const recommenderName = document.getElementById("recommender_name");
  // Trigger showPopup only when a non-empty recommendation is submitted
  if (recommendation && recommendation.value != null && recommendation.value.trim() !== "") {
    console.log("New recommendation added");
    const messageText = recommendation.value.trim();
    const authorText = recommenderName && recommenderName.value.trim() !== "" ? recommenderName.value.trim() : null;
    // Create and render the DOM element
    renderRecommendationCard(messageText, authorText);
    // Save to localStorage for persistence across reloads
    saveRecommendationToStorage(messageText, authorText);
    // Reset the input fields after submission
    recommendation.value = "";
    if (recommenderName) {
      recommenderName.value = "";
    }
    // Show confirmation popup only after a new recommendation is submitted
    showPopup(true);
  }
}
function renderRecommendationCard(message, author) {
  const container = document.getElementById("all_recommendations");
  if (!container) return;
  // Create a new 'recommendation' element
  const element = document.createElement("div");
  element.setAttribute("class", "recommendation");
  const openQuote = document.createElement("span");
  openQuote.innerHTML = "&#8220;";
  const textNode = document.createTextNode(" " + message + " ");
