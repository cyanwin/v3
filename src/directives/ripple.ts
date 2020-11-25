export default {
    mounted(el: HTMLElement) {
        el.style['overflow'] = 'hidden'
        el.style['position'] = 'relative'

        el.addEventListener('click', (e) => {
            const rippleEle = document.createElement('div'),
                { width, height } = el.getBoundingClientRect(),
                maxSize = Math.max(width, height),
                { offsetX, offsetY } = e,
                positionX = offsetX - maxSize / 2,
                positionY = offsetY - maxSize / 2

            rippleEle.classList.add('ripple-shadow')

            rippleEle.style.cssText = `
                position: absolute;
                width: ${maxSize}px;
                height: ${maxSize}px;
                left: ${positionX}px;
                top: ${positionY}px;
                border-radius: 50%;
                background: currentColor;
                opacity: .2;
                transform-origin: center center;
                animation: ripple .5s cubic-bezier(.4, 0, .2, 1);
                pointer-events: none;
            `
            el.appendChild(rippleEle)

            rippleEle.addEventListener('animationend', () => {
                el.removeChild(rippleEle)
            })
        })
    }
}
