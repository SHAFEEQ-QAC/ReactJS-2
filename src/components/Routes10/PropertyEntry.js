import React from 'react';
import { Form } from 'react-router-dom';

function PropertyEntry() {
  return (
    <div>
      <Form method="POST">

      Address:<input type="Text" name="address" /><br/>
      PostCode:<input type="Text" name="postcode" /><br/>
      Type:<input type="Text" name="type" /><br/>
      Price:<input type="Text" name="price"/><br/>
      <button type="submit"> Add New Property </button>

      </Form>
    </div>
  );
}

export default PropertyEntry;
