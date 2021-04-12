import React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import './Doc.css';

function AddNeClass() {
    const [open, setOpen] = useState(false);
    return (
        <div>
          <Button
            className="button"
            onClick={() => setOpen(!open)}
            aria-controls="text"
            aria-expanded={open}
          >
            ADD NEW COURSE
          </Button>
          <Collapse in={open}>
            <div id="text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </Collapse>
        </div>
      );
}

export default AddNeClass;
