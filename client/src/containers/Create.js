import React from 'react';

export const Create = () => {
  return (
      <div className="container">
        <h3 className="center-align">Create </h3>

        <form action="/create" method="POST">
            <div className="input-field col s6">
                <input id="name" type="text" name="title" className="validate" />
                <label for="name">Title</label>
            </div>
            <button type="submit" className="waves-effect waves-light btn">Save</button>

            <br/><br/>
        </form>
      </div>
  );
}