import os
import openai
from dotenv import load_dotenv, find_dotenv
import streamlit as st
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain


load_dotenv(find_dotenv())

openai.api_key = os.environ["OPENAI_API_KEY"]

#app template

st.title("🧐 Levis AI ")
prompt = st.text_input("Plug in your prompt")
 #prompt template
title_template = PromptTemplate(
    input_variables= ['topic'],
    template= 'what does the law in Ghana say about {topic}'
)






llm = OpenAI(temperature=0.9)
title_chain = LLMChain(llm = llm, prompt = title_template, verbose = True)
if prompt:
    response = title_chain.run(topic = prompt)
    st.write(response)



















# def chat(input):
#     messages = [{"role": "user", "content": input}]
#     response = openai.ChatCompletion.create(
#         model="gpt-3.5-turbo",
#         messages=messages,
#         temperature=0,
#     )
#     return response.choices[0].message["content"]

# output = chat("What is the capital of France")
# print(output)






# from transformers import pipeline
# def chat(url):
#     chatpdf = pipeline("document-question-answering",
#             model="impira/layoutlm-document-qa",)
    
#     response = chatpdf(url, "What age can you vote")
    
#     print(response)
#     return response

# chat ("gconst.jpg") 
