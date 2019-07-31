import React, {Fragment,useState} from 'react';
import {connect} from 'react-redux';
import DropDownMenu from './DropDownMenu';
import ComposerEditor from '../ComposerEditor';
import Button from './Button';
import withRedux from '../hoc/withRedux';
import {composerCancel,composerPost} from '../../redux/composerActions';


 

const ComposerForm = ({categories})=>{

    const [catSelection,setCategory] = useState("0");
    const [editor,setEditor] = useState("");
    const [title,setTitle] = useState("");

    const CancelBtn = withRedux(composerCancel)(Button);
    const PostBtn = withRedux(composerPost)(Button);

    const handleEditorChange = (value)=>{
        setEditor(value);
    }

    const handleSelect = (id) =>{
        setCategory(id);
    }

    const handleTitleChange = (e) =>{
        setTitle(e.target.value);
    }

    const handlePost = ()=>{
        console.log("posting!");
        console.log(catSelection);
        console.log(editor);
        console.log(title);
    }


    return(
        <Fragment>
            <div className="form-row">
                <div className="col-md-7 my-1">
                    <input onChange={handleTitleChange} type="text" className="form-control border-primary" placeholder="Type title here."></input>
                </div>
                <div className="col-md-5 my-1">
                    <DropDownMenu onSelect={handleSelect} title="Choose Category">
                        {
                            categories.map((category,index)=>{
                                return(
                                <div data-id={category.id} data-label={category.label} key={index}>
                                    <h6>{category.label}</h6>
                                    <span>{category.description}</span>
                                </div>  
                                );
                            })
                        }
                    </DropDownMenu>
                </div>
            </div>
            <div className="border border-primary flex-grow-1">
                <ComposerEditor onEditorChange={handleEditorChange} className="border-primary" />
            </div>
            <div className="form-row">
                <Button onClick={handlePost} classNames="btn btn-primary m-2">
                    Post Topic
                </Button>            
                <CancelBtn classNames="btn btn-outline-primary m-2">
                    Cancel
                </CancelBtn>
            </div>
        </Fragment>
    )

}

const mapStateToProps = (state) =>{
    return ({
        categories: state.category.items
    })
}

export default connect(mapStateToProps)(ComposerForm);