import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';
import SelectInput from './common/SelectInput';
import { getAuthors } from '../api/authorApi';

function CourseForm(props) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then(_authors => setAuthors(_authors));
  }, []);

  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        value={props.course.title}
        onChange={props.onChange}
        error={props.errors.title}
      />
      <SelectInput
        id="author"
        name="authorId"
        label="Author"
        options={authors}
        value={props.course.authorId || ''}
        onChange={props.onChange}
        error={props.errors.authorId}
      />
      <TextInput
        id="category"
        name="category"
        label="Category"
        value={props.course.category}
        onChange={props.onChange}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  obSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CourseForm;
