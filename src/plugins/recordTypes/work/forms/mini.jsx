const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Row,
  } = pluginContext.layoutComponents;

  const {
    Field,
  } = pluginContext.recordComponents;

  return (
    <Field name="document">
      <Field
        name="relation-list-item"
        subpath="rel:relations-common-list"
        showChildren={false}
        showSiblings={false}
      />

      <Row>
        <Field name="workTermGroupList">
          <Field name="workTermGroup">
            <Field name="termDisplayName" />
          </Field>
        </Field>

        <Field name="creatorGroupList">
          <Field name="creatorGroup">
            <Field name="creator" />
          </Field>
        </Field>
      </Row>

      <Row>

        <Field name="workDateGroupList">
          <Field name="workDateGroup">
            <Field name="workDate" />
          </Field>
        </Field>

        <Field name="countries" subpath="ns2:works_cinefiles">
          <Field name="country" />
        </Field>
      </Row>
    </Field>
  );
};

export default pluginContext => ({
  template: template(pluginContext),
});
