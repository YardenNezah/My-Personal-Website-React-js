const Popup = () => {
/*
    const handleClick = () => {
        this.props.toggle();
    };*/

    return (
        <div class="contact-popup">
            <form>
                <h3>Contact Me!</h3>
                <label>
                    Name:
                    <input type="text" name="name"/>
                </label>
                <label for="message">Message</label>
                <textarea placeholder="Start typing..." className="message" name="message"/>
                <br/>
                <input type="submit" className="send">Send
                </input>
                {/*
                <button className="close"
                    onClick={
                        () => handleClick
                }>close</button>
            */}
            </form>
        </div>
    );
}

export default Popup;
