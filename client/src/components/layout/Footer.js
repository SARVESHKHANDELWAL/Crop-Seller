import React, { Component } from 'react'

const year=new Date().getFullYear();
 class Footer extends Component {
    render() {
        return (
            
                <div>
                <div className="backimg1">
                </div>
            <footer className="bg-dark footer mg-4 p-4 text-white text-center">
            Copyright &copy;{year} CropSeller
            |All Rights Reserved
            </footer>
             </div>
            
        )
    }
}
export default Footer;

