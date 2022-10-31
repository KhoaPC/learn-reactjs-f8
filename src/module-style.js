import clsx from 'clsx';
import stylesHeading from './components/heading/Heading.module.css';
import stylesParagraph from './components/paragraph/Paragraph.module.css';
import styleButton from './components/button/Button.module.css';

function AppText() {
    return (
        <div>
            <h1 className={stylesHeading.heading}>Hello</h1>
            <p className={stylesParagraph.paragraph}>Tui ten la Teo</p>
        </div>
    )
}

function App({active, disable}) {
    // Sử dụng library `clsx`
    const classes = clsx(styleButton.btn, {
        [styleButton.active]: active,
        [styleButton.disable]: disable,
        'flex-center': false
    })
    return (
        <div style={{padding: 30}}>
            <button className={classes}>
                Click me!
            </button>
        </div>
    )
}
export default App;