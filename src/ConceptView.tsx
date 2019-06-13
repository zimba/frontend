import React from "react";
import { Button } from "./Button";

interface IConcepts {
    label: string;
    children: number;
  }
  
  interface IProps {
  
  }
  
  interface IState {
    concepts: IConcepts[];
    errorMsg: string;
  }
  
  export class ConceptView extends React.Component<IProps, IState> {
    constructor(props: IProps) {
      super(props);
  
      this.state = {
        concepts: [],
        errorMsg: ""
      };
    }
  
    async getConcepts(url: string): Promise<void> {
      try {
        let request = await fetch(url);
  
        if(request.status === 500) {
          let text = await request.text();
  
          this.setState({
            errorMsg: text
          });
        }
        else {
          let data = await request.json();
  
          this.setState({
            concepts: data,
            errorMsg: ""
          });
        }
      }
      catch(e) {
        this.setState({
          errorMsg: e.message
        });
      }
    }
  
    componentDidMount(){
      this.getConcepts(`api/results`);
    }
  
    render() {
      let { concepts, errorMsg } = this.state;
      let content: JSX.Element = <></>;
  
      if(errorMsg !== "")
        content = <h1>{ errorMsg }</h1>
      else {
        const style: React.CSSProperties = {
          textAlign: "left"
        };
  
        content = <pre style={ style }>{ JSON.stringify(concepts, null, 4) }</pre>;      
      }
  
      return <>
        { content }
        <Button color="#90CAF9" onClick={ this.update }>Update</Button>
        <Button color="#EC407A" onClick={ this.updateDirectly }>Update (no proxy)</Button>
      </>
    }
  
    update = () => {
      this.getConcepts(`api/results`);
    }
  
    updateDirectly = () => {
      this.getConcepts(`http://localhost:4000/api/results`);
    }
  }