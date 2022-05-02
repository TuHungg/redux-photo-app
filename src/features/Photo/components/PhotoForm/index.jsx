import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";

PhotoForm.propTypes = {
  obSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onsubmit: null,
};

function PhotoForm(props) {
  const initiaValues = {
    title: "",
    categoryId: null,
  };

  return (
    <Formik initialValues={initiaValues}>
      {(formikProp) => {
        const { values, errors, touched } = formikProp;
        console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="catergoryId"
              component={SelectField}
              label="Catergory"
              placeholder="Eg: What's your photo catergory"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            {/* 
            <FormGroup>
              <Label for="titleId">Title</Label>
              <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
            </FormGroup> */}

            {/* <FormGroup>
              <Label for="categoryId">Catergory</Label>

              <Select placeholder="Select option">
                {PHOTO_CATEGORY_OPTIONS.map((item, index) => (
                  <option key={index} value="option1">
                    {item.label}
                  </option>
                ))}
              </Select>
            </FormGroup> */}

            <FormGroup>
              <Label for="categoryId">Photo</Label>

              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img src={Images.PINK_BG} alt="colorful" width="200px" height="200px" />
              </div>
            </FormGroup>

            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
