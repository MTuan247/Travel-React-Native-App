const DefaultTheme = {
    dark: false,
    colors: {
      primary: "#3399ff",
      background: '#ffff',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: '#4d4d4d',
      notification: 'rgb(255, 69, 58)',
    },
};

function ThemeReducer(state = DefaultTheme, action) {
    if (typeof state === 'undefined') {
        return 0;
    }

    switch (action.type) {
        case 'SETCOLOR':
            const MyTheme = {
                ...DefaultTheme,
                colors: {
                  ...DefaultTheme.colors,
                  primary: action.payload,
                },
              };
            return MyTheme;

        default:
            return state;
    }
}

export default ThemeReducer;