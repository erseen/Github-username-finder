import React, { Component } from 'react'

export class Search extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            keyword:''
        }
    }
    onChange=(e)=>
    {
        this.setState({
            keyword:e.target.value
        })
    }
    onSubmit=(e)=>
    {
        e.preventDefault();
        if (this.state.keyword==='')
        {
            this.props.displayAlert('Anahtar kelime girininiz ','warning');
        }
        else
        {
            this.props.searchUsers(this.state.keyword);
            this.setState({ keyword:''});
        }
 
    

    }
    
  render() {
    return (
      <div className='container my-3'>
        <form onSubmit={this.onSubmit}>
            <div className='input-group'>
                <input type='text' value={this.state.keyword} onChange={this.onChange} className='form-control' placeholder='Anahtar Kelime'></input>
                <button className='btn btn-primary'  type='submit'>Ara</button>
            </div>
        </form>
            {
                this.props.showClearButton && <button onClick={this.props.clearResults}  className='btn btn-outline-danger mt-2 btn-block'>Sonuçları Temizle</button>
            }

       
      </div>
    )
  }
}

export default Search