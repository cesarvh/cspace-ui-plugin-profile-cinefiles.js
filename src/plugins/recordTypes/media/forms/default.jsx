import { defineMessages } from 'react-intl';

const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Col,
    Cols,
    Panel,
  } = pluginContext.layoutComponents;

  const {
    Field,
    Subrecord,
  } = pluginContext.recordComponents;

  const {
    extensions,
  } = pluginContext.config;

  return (
    <Field name="document">
      <Panel name="media" collapsible>
        <Panel name="file" collapsible>
          <Field name="page" subpath="ns2:media_cinefiles" />
          <Subrecord name="blob" showDetachButton />
        </Panel>

        <Field name="externalUrl" />

        {extensions.dimension.form}

        <Cols>
          <Col>
            <Field name="contributor" />
            <Field name="creator" />

            <Field name="languageList">
              <Field name="language" />
            </Field>

            <Field name="publisher" />

            <Field name="relationList">
              <Field name="relation" />
            </Field>

            <Field name="copyrightStatement" />
          </Col>

          <Col>
            <Field name="typeList">
              <Field name="type" />
            </Field>

            <Field name="coverage" />

            <Field name="dateGroupList">
              <Field name="dateGroup" />
            </Field>

            <Field name="source" />

            <Field name="subjectList">
              <Field name="subject" />
            </Field>

            <Field name="rightsHolder" />
          </Col>
        </Cols>

        <Field name="description" />
      </Panel>
    </Field>
  );
};

export default pluginContext => ({
  messages: defineMessages({
    name: {
      id: 'form.media.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(pluginContext),
});
