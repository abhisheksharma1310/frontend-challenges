const lists = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    bg: "hsla(0, 100%, 67%, 10%)",
    color: "hsl(0, 100%, 67%)",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    bg: "hsla(39, 100%, 56%, 10%)",
    color: "hsl(39, 100%, 56%)",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    bg: "hsla(166, 100%, 37%, 10%)",
    color: "hsl(166, 100%, 37%)",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    bg: "hsla(234, 85%, 45%, 10%)",
    color: "hsl(234, 85%, 45%)",
  },
];

const summaryList = document.querySelector(".summary-lists");

lists.forEach((list) => appendToSummaryList(list));

function appendToSummaryList({ category, score, icon, bg, color }) {
  // Create the main container div
  const summaryListItemDiv = document.createElement("div");
  summaryListItemDiv.className = `summary-list-item`;
  summaryListItemDiv.style.background = bg;

  // Create the topic reaction div
  const summaryListTopicDiv = document.createElement("div");
  summaryListTopicDiv.className = `summary-list-topic`;
  summaryListTopicDiv.style.color = color;

  // Create the image element
  const topicImage = document.createElement("img");
  topicImage.src = icon;
  topicImage.alt = category;

  // Create the first paragraph element
  const text1Paragraph = document.createElement("p");
  text1Paragraph.className = "summary-list-text1";
  text1Paragraph.textContent = category;

  // Append image and text1 to topic reaction div
  summaryListTopicDiv.appendChild(topicImage);
  summaryListTopicDiv.appendChild(text1Paragraph);

  // Create the second paragraph element
  const text2Paragraph = document.createElement("p");
  text2Paragraph.className = "summary-list-text2";
  text2Paragraph.textContent = score;

  // Create the span element within text2
  const text3Span = document.createElement("span");
  text3Span.className = "summary-list-text3";
  text3Span.textContent = " /100";

  // Append span to text2
  text2Paragraph.appendChild(text3Span);

  // Append topic reaction div and text2 to the main container div
  summaryListItemDiv.appendChild(summaryListTopicDiv);
  summaryListItemDiv.appendChild(text2Paragraph);

  // Append the main container div to the summaryList
  summaryList.appendChild(summaryListItemDiv);
}
