import { CodeSnippet } from '@/types'

export const codeSnippets: CodeSnippet[] = [
  {
    id: 'snippet-1',
    title: 'Validação Automática de Dados com VBA',
    description:
      'Sistema de validação que verifica integridade de dados em planilhas, com logging de erros e notificações automáticas.',
    language: 'vba',
    code: `Function ValidarDados(ws As Worksheet, intervalo As Range) As Boolean
    Dim cell As Range
    Dim erros As Collection
    Set erros = New Collection
    
    For Each cell In intervalo
        If IsEmpty(cell.Value) Then
            erros.Add "Célula vazia: " & cell.Address
        ElseIf Not IsNumeric(cell.Value) And cell.Column = 2 Then
            erros.Add "Valor não numérico: " & cell.Address
        End If
    Next cell
    
    If erros.Count > 0 Then
        LogErros erros
        ValidarDados = False
    Else
        ValidarDados = True
    End If
End Function`,
    tags: ['VBA', 'Excel', 'Validação', 'Automação'],
    createdAt: '2024-10-01',
  },
  {
    id: 'snippet-2',
    title: 'Análise de Riscos com Python',
    description:
      'Algoritmo para cálculo automático de matriz de riscos com análise estatística e visualização de resultados.',
    language: 'python',
    code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

class RiskAnalyzer:
    def __init__(self, data):
        self.data = pd.DataFrame(data)
        self.risk_matrix = None
    
    def calculate_risk_score(self, probability, impact):
        """Calcula score de risco baseado em probabilidade e impacto"""
        return probability * impact
    
    def generate_matrix(self):
        """Gera matriz de riscos com classificação automática"""
        self.data['risk_score'] = self.data.apply(
            lambda x: self.calculate_risk_score(x['probability'], x['impact']), 
            axis=1
        )
        
        # Classificação de riscos
        conditions = [
            self.data['risk_score'] <= 4,
            (self.data['risk_score'] > 4) & (self.data['risk_score'] <= 10),
            self.data['risk_score'] > 10
        ]
        choices = ['Baixo', 'Médio', 'Alto']
        self.data['classification'] = np.select(conditions, choices)
        
        return self.data
    
    def plot_risk_matrix(self):
        """Visualiza matriz de riscos"""
        plt.figure(figsize=(10, 8))
        scatter = plt.scatter(
            self.data['probability'], 
            self.data['impact'],
            c=self.data['risk_score'], 
            cmap='Reds',
            s=100,
            alpha=0.7
        )
        plt.colorbar(scatter, label='Risk Score')
        plt.xlabel('Probabilidade')
        plt.ylabel('Impacto')
        plt.title('Matriz de Avaliação de Riscos')
        plt.grid(True, alpha=0.3)
        plt.show()

# Exemplo de uso
risk_data = [
    {'id': 1, 'risk': 'Falha de Sistema', 'probability': 3, 'impact': 4},
    {'id': 2, 'risk': 'Erro Humano', 'probability': 4, 'impact': 3},
    {'id': 3, 'risk': 'Cyber Attack', 'probability': 2, 'impact': 5}
]

analyzer = RiskAnalyzer(risk_data)
result = analyzer.generate_matrix()
analyzer.plot_risk_matrix()`,
    tags: ['Python', 'Data Science', 'Risk Analysis', 'Matplotlib'],
    createdAt: '2024-09-28',
  },
  {
    id: 'snippet-3',
    title: 'Integração JSON com VBA',
    description:
      'Parser JSON customizado para VBA que converte dados JSON em objetos manipuláveis no Excel.',
    language: 'vba',
    code: `Public Function ParseJSON(jsonString As String) As Object
    Set ParseJSON = CreateObject("Scripting.Dictionary")
    
    ' Remove espaços e quebras de linha
    jsonString = Replace(jsonString, vbCrLf, "")
    jsonString = Replace(jsonString, " ", "")
    
    ' Verifica se é um objeto JSON válido
    If Left(jsonString, 1) = "{" And Right(jsonString, 1) = "}" Then
        jsonString = Mid(jsonString, 2, Len(jsonString) - 2)
        
        Dim pairs As Variant
        pairs = Split(jsonString, ",")
        
        Dim i As Integer
        For i = 0 To UBound(pairs)
            Dim pair As Variant
            pair = Split(pairs(i), ":")
            
            If UBound(pair) = 1 Then
                Dim key As String
                Dim value As String
                key = Replace(pair(0), Chr(34), "") ' Remove aspas
                value = Replace(pair(1), Chr(34), "") ' Remove aspas
                ParseJSON.Add key, value
            End If
        Next i
    End If
End Function

Sub ExemploUsoJSON()
    Dim jsonData As String
    jsonData = "{""nome"":""João"",""idade"":""30"",""cidade"":""Rio""}"
    
    Dim obj As Object
    Set obj = ParseJSON(jsonData)
    
    Debug.Print obj("nome")    ' Saída: João
    Debug.Print obj("idade")   ' Saída: 30
    Debug.Print obj("cidade")  ' Saída: Rio
End Sub`,
    tags: ['VBA', 'JSON', 'API', 'Integration'],
    createdAt: '2024-09-25',
  },
]
