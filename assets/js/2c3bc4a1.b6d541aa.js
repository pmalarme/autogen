"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,_=c["".concat(p,".").concat(h)]||c[h]||m[h]||o;return n?a.createElement(_,l(l({ref:t},u),{},{components:n})):a.createElement(_,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5615:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"math_user_proxy_agent",title:"agentchat.contrib.math_user_proxy_agent"},l=void 0,i={unversionedId:"reference/agentchat/contrib/math_user_proxy_agent",id:"reference/agentchat/contrib/math_user_proxy_agent",isDocsHomePage:!1,title:"agentchat.contrib.math_user_proxy_agent",description:"MathUserProxyAgent Objects",source:"@site/docs/reference/agentchat/contrib/math_user_proxy_agent.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/math_user_proxy_agent",permalink:"/autogen/docs/reference/agentchat/contrib/math_user_proxy_agent",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/math_user_proxy_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"math_user_proxy_agent",title:"agentchat.contrib.math_user_proxy_agent"},sidebar:"referenceSideBar",next:{title:"qdrant_retrieve_user_proxy_agent",permalink:"/autogen/docs/reference/agentchat/contrib/qdrant_retrieve_user_proxy_agent"}},p=[{value:"MathUserProxyAgent Objects",id:"mathuserproxyagent-objects",children:[{value:"MAX_CONSECUTIVE_AUTO_REPLY",id:"max_consecutive_auto_reply",children:[],level:4},{value:"__init__",id:"__init__",children:[],level:4},{value:"generate_init_message",id:"generate_init_message",children:[],level:4},{value:"execute_one_python_code",id:"execute_one_python_code",children:[],level:4},{value:"execute_one_wolfram_query",id:"execute_one_wolfram_query",children:[],level:4},{value:"get_from_dict_or_env",id:"get_from_dict_or_env",children:[],level:4}],level:2},{value:"WolframAlphaAPIWrapper Objects",id:"wolframalphaapiwrapper-objects",children:[{value:"wolfram_client",id:"wolfram_client",children:[],level:4}],level:2},{value:"Config Objects",id:"config-objects",children:[{value:"validate_environment",id:"validate_environment",children:[],level:4},{value:"run",id:"run",children:[],level:4}],level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mathuserproxyagent-objects"},"MathUserProxyAgent Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class MathUserProxyAgent(UserProxyAgent)\n")),(0,r.kt)("p",null,"(Experimental) A MathChat agent that can handle math problems."),(0,r.kt)("h4",{id:"max_consecutive_auto_reply"},"MAX","_","CONSECUTIVE","_","AUTO","_","REPLY"),(0,r.kt)("p",null,"maximum number of consecutive auto replies (subject to future change)"),(0,r.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(name: Optional[str] = "MathChatAgent",\n             is_termination_msg: Optional[Callable[\n                 [Dict], bool]] = _is_termination_msg_mathchat,\n             human_input_mode: Optional[str] = "NEVER",\n             default_auto_reply: Optional[Union[str, Dict,\n                                                None]] = DEFAULT_REPLY,\n             max_invalid_q_per_step=3,\n             **kwargs)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ",(0,r.kt)("em",{parentName:"li"},"str")," - name of the agent"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_termination_msg")," ",(0,r.kt)("em",{parentName:"li"},"function"),' - a function that takes a message in the form of a dictionary and returns a boolean value indicating if this received message is a termination message.\nThe dict can contain the following keys: "content", "role", "name", "function_call".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"human_input_mode")," ",(0,r.kt)("em",{parentName:"li"},"str"),' - whether to ask for human inputs every time a message is received.\nPossible values are "ALWAYS", "TERMINATE", "NEVER".\n(1) When "ALWAYS", the agent prompts for human input every time a message is received.\nUnder this mode, the conversation stops when the human input is "exit",\nor when is_termination_msg is True and there is no human input.\n(2) When "TERMINATE", the agent only prompts for human input only when a termination message is received or\nthe number of auto reply reaches the max_consecutive_auto_reply.\n(3) (Default) When "NEVER", the agent will never prompt for human input. Under this mode, the conversation stops\nwhen the number of auto reply reaches the max_consecutive_auto_reply or when is_termination_msg is True.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default_auto_reply")," ",(0,r.kt)("em",{parentName:"li"},"str or dict or None")," - the default auto reply message when no code execution or llm based reply is generated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_invalid_q_per_step")," ",(0,r.kt)("em",{parentName:"li"},"int")," - (ADDED) the maximum number of invalid queries per step."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"**kwargs")," ",(0,r.kt)("em",{parentName:"li"},"dict")," - other kwargs in ",(0,r.kt)("a",{parentName:"li",href:"../user_proxy_agent#__init__"},"UserProxyAgent"),".")),(0,r.kt)("h4",{id:"generate_init_message"},"generate","_","init","_","message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def generate_init_message(problem,\n                          prompt_type="default",\n                          customized_prompt=None)\n')),(0,r.kt)("p",null,"Generate a prompt for the assitant agent with the given problem and prompt."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"problem")," ",(0,r.kt)("em",{parentName:"li"},"str")," - the problem to be solved."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prompt_type")," ",(0,r.kt)("em",{parentName:"li"},"str"),' - the type of the prompt. Possible values are "default", "python", "wolfram".\n(1) "default": the prompt that allows the agent to choose between 3 ways to solve a problem:',(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"write a python program to solve it directly."),(0,r.kt)("li",{parentName:"ol"},"solve it directly without python."),(0,r.kt)("li",{parentName:"ol"},'solve it step by step with python.\n(2) "python":\na simplified prompt from the third way of the "default" prompt, that asks the assistant\nto solve the problem step by step with python.\n(3) "two_tools":\na simplified prompt similar to the "python" prompt, but allows the model to choose between\nPython and Wolfram Alpha to solve the problem.'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"customized_prompt")," ",(0,r.kt)("em",{parentName:"li"},"str")," - a customized prompt to be used. If it is not None, the prompt_type will be ignored.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str")," - the generated prompt ready to be sent to the assistant agent.")),(0,r.kt)("h4",{id:"execute_one_python_code"},"execute","_","one","_","python","_","code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def execute_one_python_code(pycode)\n")),(0,r.kt)("p",null,"Execute python code blocks."),(0,r.kt)("p",null,'Previous python code will be saved and executed together with the new code.\nthe "print" function will also be added to the last line of the code if needed'),(0,r.kt)("h4",{id:"execute_one_wolfram_query"},"execute","_","one","_","wolfram","_","query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def execute_one_wolfram_query(query: str)\n")),(0,r.kt)("p",null,"Run one wolfram query and return the output."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query")," - string of the query.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"output")," - string with the output of the query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_success")," - boolean indicating whether the query was successful.")),(0,r.kt)("h4",{id:"get_from_dict_or_env"},"get","_","from","_","dict","_","or","_","env"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def get_from_dict_or_env(data: Dict[str, Any],\n                         key: str,\n                         env_key: str,\n                         default: Optional[str] = None) -> str\n")),(0,r.kt)("p",null,"Get a value from a dictionary or an environment variable."),(0,r.kt)("h2",{id:"wolframalphaapiwrapper-objects"},"WolframAlphaAPIWrapper Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class WolframAlphaAPIWrapper(BaseModel)\n")),(0,r.kt)("p",null,"Wrapper for Wolfram Alpha."),(0,r.kt)("p",null,"Docs for using:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to wolfram alpha and sign up for a developer account"),(0,r.kt)("li",{parentName:"ol"},"Create an app and get your APP ID"),(0,r.kt)("li",{parentName:"ol"},"Save your APP ID into WOLFRAM_ALPHA_APPID env variable"),(0,r.kt)("li",{parentName:"ol"},"pip install wolframalpha")),(0,r.kt)("h4",{id:"wolfram_client"},"wolfram","_","client"),(0,r.kt)("p",null,":meta private:"),(0,r.kt)("h2",{id:"config-objects"},"Config Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Config()\n")),(0,r.kt)("p",null,"Configuration for this pydantic object."),(0,r.kt)("h4",{id:"validate_environment"},"validate","_","environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@root_validator(skip_on_failure=True)\ndef validate_environment(cls, values: Dict) -> Dict\n")),(0,r.kt)("p",null,"Validate that api key and python package exists in environment."),(0,r.kt)("h4",{id:"run"},"run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def run(query: str) -> str\n")),(0,r.kt)("p",null,"Run query through WolframAlpha and parse result."))}u.isMDXComponent=!0}}]);