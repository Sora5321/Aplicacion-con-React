import Content from './Content';
import Footer from './Footer';

function ContentWrapper() {
    return (    
        <div id="content-wrapper" className="d-flex flex-column">
            <Content />
            <Footer />
        </div>
    );
}

export default ContentWrapper;