import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Input, Icon } from 'antd'

const FormItem = Form.Item

const CreateFolder = Form.create()(
  ({ form, visible, onCancel, onSubmit }) => {
    const handleSubmit = (e) => {
      e.preventDefault()
      form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          onSubmit(values)
        }
      })
    }
    return (
      <Modal
        visible={visible}
        title="Create new folder"
        cancelText="Cancel"
        okText="Create"
        onCancel={onCancel}
        onOk={handleSubmit}
      >
        <Form>
          <FormItem>
            {form.getFieldDecorator('title', {
              rules: [{
                required: true, message: "Title required",
              }],
            })(
              <Input prefix={<Icon type="file-text" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Folder title" />
              )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
)

CreateFolder.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default CreateFolder