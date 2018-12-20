export default {
  functional: true,
  props: {
    number: Number,
    renderFunc: Function
  },
  render: (h, ctx) => {
    return ctx.props.renderFunc(h, ctx.props.number);
  }
  /* props: {
    name: String,
    renderFunc: Function
  },
  render: (h, ctx) => {
    return ctx.props.renderFunc(h, ctx.props.name);
  } */
};
