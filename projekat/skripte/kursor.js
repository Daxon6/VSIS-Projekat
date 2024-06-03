const heading = document.getElementById('naslov');
const colorRange = [
    '#F0FFFF', '#E0FFFF', '#E0FFFF', '#AFEEEE', '#ADD8E6',
    '#B0E0E6', '#D8FAFAFF'
];

heading.addEventListener('mousemove', (event) => {
    const rect = heading.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const angle = (x / rect.width) * 90;
    const shadowX = (x / rect.width) * 6 - 3;
    const shadowY = (y / rect.height) * 6 - 3;

    const colorIndexDecimal = (x / rect.width) * (colorRange.length - 1);
    const colorIndex1 = Math.floor(colorIndexDecimal);
    const colorIndex2 = Math.ceil(colorIndexDecimal);
    const weight = colorIndexDecimal - colorIndex1;

    const color1 = colorRange[colorIndex1];
    const color2 = colorRange[colorIndex2];

    // Calculate interpolated color (RGB)
    const r = Math.round(parseInt(color1.slice(1, 3), 16) * (1 - weight) + parseInt(color2.slice(1, 3), 16) * weight);
    const g = Math.round(parseInt(color1.slice(3, 5), 16) * (1 - weight) + parseInt(color2.slice(3, 5), 16) * weight);
    const b = Math.round(parseInt(color1.slice(5, 7), 16) * (1 - weight) + parseInt(color2.slice(5, 7), 16) * weight);
    const interpolatedColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

    heading.style.setProperty('--gradient-angle', `${angle}deg`);
    heading.style.setProperty('--shadow-x', `${shadowX}px`);
    heading.style.setProperty('--shadow-y', `${shadowY}px`);
    heading.style.setProperty('background', `linear-gradient(${angle}deg, ${color1}, ${interpolatedColor}, ${color2})`);
});
