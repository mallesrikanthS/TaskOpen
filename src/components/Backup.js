const Lval = (this.state.ladd)+parseInt(this.state.LA1)+parseInt(this.state.LA2)+parseInt(this.state.LA3)+parseInt(this.state.LA1D1)
        +parseInt(this.state.LA1D2)+parseInt(this.state.LA1D3)+parseInt(this.state.LA1D4)+parseInt(this.state.LA1D5)
        +parseInt(this.state.LA2D1)+parseInt(this.state.LA2D2)+parseInt(this.state.LA2D3);

        const Rval = parseInt(this.state.RA1)+parseInt(this.state.RA2)+parseInt(this.state.RA3)+parseInt(this.state.RA1D1)
        +parseInt(this.state.RA1D2)+parseInt(this.state.RA1D3)+parseInt(this.state.RA1D4)+parseInt(this.state.RA1D5)
        +parseInt(this.state.RA2D1)+parseInt(this.state.RA2D2)+parseInt(this.state.RA2D3)
        console.log(Lval,Rval);









### Handle Change Code ...$


handleLChange = (e,name)=> {
        //console.log(e,name);
        if (name=== 'LA1'){
            this.setState({LA1: e.target.value});
        }        
        else if (name==='LA2') {
            this.setState({LA2: e.target.value});
        } 
        else if (name==='LA3') {
            this.setState({LA3: e.target.value});
        }
        else if (name==='LA1D1') {
            this.setState({LA1D1: e.target.value});
        }
        else if (name==='LA1D2') {
            this.setState({LA1D2: e.target.value});
        }
        else if (name==='LA1D3') {
            this.setState({LA1D3: e.target.value});
        }
        else if (name==='LA1D4') {
            this.setState({LA1D4: e.target.value});
        }
        else if (name==='LA1D5') {
            this.setState({LA1D5: e.target.value});
        }
        else if (name==='LA2D1') {
            this.setState({LA2D1: e.target.value});
        }
        else if (name==='LA2D2') {
            this.setState({LA2D2: e.target.value});
        }
        else if (name==='LA2D3') {
            this.setState({LA2D3: e.target.value});
        }
    }

    handleRChange = (e,name)=> {
    //console.log(e,name);
        if (name=== 'RA1'){
            this.setState({RA1: e.target.value});
        }        
        else if (name==='RA2') {
            this.setState({RA2: e.target.value});
        } 
        else if (name==='RA3') {
            this.setState({RA3: e.target.value});
        }
        else if (name==='RA1D1') {
            this.setState({RA1D1: e.target.value});
        }
        else if (name==='RA1D2') {
            this.setState({RA1D2: e.target.value});
        }
        else if (name==='RA1D3') {
            this.setState({RA1D3: e.target.value});
        }
        else if (name==='RA1D4') {
            this.setState({RA1D4: e.target.value});
        }
        else if (name==='RA1D5') {
            this.setState({RA1D5: e.target.value});
        }
        else if (name==='RA2D1') {
            this.setState({RA2D1: e.target.value});
        }
        else if (name==='RA2D2') {
            this.setState({RA2D2: e.target.value});
        }
        else if (name==='RA2D3') {
            this.setState({RA2D3: e.target.value});
        }
    }