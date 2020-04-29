export const setDefaultPositions = (defaultPositions={}) => {
    const defaultPosition = {
        x: 0,
        y: 0,
        width: 520,
        height: 240,
    }
    if (!defaultPositions || (!defaultPositions.x && !defaultPositions.y)){
        const { clientWidth, clientHeight } = document.body;
        const newW = defaultPositions.width || defaultPosition.width
        const newX = (clientWidth - newW) / 2;
        const newH = defaultPositions.height || defaultPosition.height;
        const newY = (clientHeight - newH) / 4;
        return {
            x: newX,
            y: newY,
            width: 520,
            height: 240,
        }
    }
    return defaultPositions
}