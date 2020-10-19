import React from "react";
import MainSkeleton from "../components/main-skeleton";



class Contact extends React.Component {


    _name = ""
    _email = ""

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        window.history.replaceState(null, null, window.location.href);
    }

    onSubmitClick = event => {
        this.setState({ isLoading: true })
        event.preventDefault()
        var form = event.target
        console.log(this._name);


        // fetch("https://getform.io/f/5934d592-205c-455d-a782-3de5275bf5d3", {
        //     method: 'post',
        //     body: new FormData(form)
        // }).then(res => {
        //     console.log(res.status);
        //     form.reset()
        //     this.setState({ isLoading: false })
        // }).catch(err => {
        //     this.setState({ isLoading: false })
        //     console.log(err.toString());
        // })
    }

    render() {
        return (
            <MainSkeleton
                isDark={false}
                header={"Contact"}
                subText={"Let's connect already!"}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col ">
                        <div className="flex items-baseline  leading-tight">
                            <span className="text-lg xl:text-4xl text-secondary-light mr-2">Bangalore,</span>
                            <span className="text-sm xl:text-2xl text-secondary-light">India</span>
                        </div>
                        <span className="text-secondary-light text-md  lg:mt-4">androanuj@gmail.com</span>
                        <span className="text-secondary-light text-md  lg:mt-2">8097804254</span>
                    </div>

                    <div className="flex flex-col col-span-2 md:ml-2">
                        <form id="formId" onSubmit={this.onSubmitClick}>
                            <div className="w-full flex flex-row">
                                <input type="text" class="my-input form-input flex-1 mr-2" placeholder="Name" name="name" onChange={(event) => {
                                    this._name = event.target.value
                                }}></input>
                                <input type="email" class="my-input form-input flex-1" placeholder="Email" name="email"></input>
                            </div>
                            <input type="text" class="my-input form-textarea text-left mt-4" placeholder="Query (optional)" name="query" returnKeyType="done"></input>

                            <div className="mt-4 flex flex-1 justify-end">
                                <button className="px-10 py-3 bg-primary text-gray-300 rounded-md focus:outline-none focus:shadow-outline lg:hover:bg-yellow-700 text-lg shadow-lg">
                                    {this.state.isLoading ? <p>Please wait...</p> : <p>Send</p>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </MainSkeleton>)
    }

}

export default Contact;
