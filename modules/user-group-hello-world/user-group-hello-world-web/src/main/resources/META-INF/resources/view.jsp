<%@ include file="/init.jsp" %>

<p>
	<span class="hello-world-text"><liferay-ui:message key="user-group-hello-world-web.caption"/></span>
</p>

<aui:script require="user-group-js-hello-world/js/user-group-hello-world.es">
  var hw = new userGroupJsHelloWorldJsUserGroupHelloWorldEs.default();
</aui:script>