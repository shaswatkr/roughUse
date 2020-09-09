import React, { Component } from 'react';
import "./bluredImageFixedSize.css"

class BluredImageFixedSize extends Component {
    render() {
        return (
            <>
                <div class="img-container">
                    <img src="https://picsum.photos/1200/1200" alt="" class="img-blur" aria-hidden="true" />
                    <img src="https://picsum.photos/1200/1200" alt="Placeholder image" />
                </div>

                <div class="img-container">
                    <img src="https://picsum.photos/1200/2400" alt="" class="img-blur" aria-hidden="true" />
                    <img src="https://picsum.photos/1200/2400" alt="Placeholder image 2" />
                </div>

                <div class="img-container">
                    <img src="https://picsum.photos/1200/500" alt="" class="img-blur" aria-hidden="true" />
                    <img src="https://picsum.photos/1200/500" alt="Placeholder image 2" />
                </div>

                {/* DIV is defined using the below <p> width </p> */}
                <p>
                    Demo by <a target="_blank" href="https://twitter.com/Martijn_Cuppens">Martijn Cuppens</a>, photos from <a target="_blank" href="https://picsum.photos/">Lorem picsum</a>
                </p>
            </>
        );
    }
}

export default BluredImageFixedSize;