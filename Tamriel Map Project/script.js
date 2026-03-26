const markers = document.querySelectorAll(".marker");
const tooltip = document.getElementById("tooltip");
const tooltipTitle = document.getElementById("tooltip-title");
const tooltipText = document.getElementById("tooltip-text");

markers.forEach(marker => {
    marker.addEventListener("mouseenter", () => {
        tooltipTitle.textContent = marker.dataset.name;
        tooltipText.textContent = marker.dataset.info;

        const markerRect = marker.getBoundingClientRect();
        const tooltipWidth = 300;
        const tooltipHeight = 140;

        let left = markerRect.right + 12;
        let top = markerRect.top;

        if (left + tooltipWidth > window.innerWidth) {
            left = markerRect.left - tooltipWidth - 12;
        }

        if (top + tooltipHeight > window.innerHeight) {
            top = window.innerHeight - tooltipHeight - 12;
        }

        if (top < 12) {
            top = 12;
        }

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
        tooltip.classList.remove("hidden");
    });

    marker.addEventListener("mouseleave", () => {
        tooltip.classList.add("hidden");
    });
});