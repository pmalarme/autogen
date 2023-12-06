﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Message.cs

using AutoGen.Extension;
using Azure.AI.OpenAI;
using Microsoft.SemanticKernel.AI.ChatCompletion;
using ChatMessage = Microsoft.SemanticKernel.AI.ChatCompletion.ChatMessage;

namespace AutoGen
{
    public class Message : ChatMessage
    {
        public Message(
            AuthorRole role,
            string? content = null,
            string? from = null)
            : base(role, content ?? string.Empty)
        {
            this.SetFrom(from);
        }

        public string? From
        {
            get => this.GetFrom();
            set => this.SetFrom(value);
        }

        public FunctionCall? FunctionCall
        {
            get => this.GetFunctionCall();
            set => this.SetFunctionCall(value);
        }
    }
}