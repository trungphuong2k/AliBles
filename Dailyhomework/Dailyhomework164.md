Trung Phương Daily Homeworks AliBles ( 16/04/2021)

câu1 :  Giả sử trong 1 thư mục có tên Buoi2 có 2 file mới tạo lần lượt là bai1.txt và bai2.txt. 
Có những cách nào đã học trong buổi 1 để chuyển trạng thái 2 file mới từ Untrachked file (báo màu đỏ) sang Staged (Xanh lá)? *

	Đầu tiên sẽ dử dụng git status hoặc git diff để kiểm tra file đã được track  chưa. Nếu untracked :
  
	Cách 1: sử dụng git add . để convert tất cả các file từ trạng thái Untracked sang Tracked 

	Cách 2: sử dụng git add <tên file > để chuyển  file đó từ trạng thái Untracked sang Tracked 

Câu 2: Hãy phân biệt Tracked file và Untracked file trong git? *

	Untracked file: File chưa được lưu để đẩy lên git 

	Tracked file:  Đã được lưu và sẵn sàng để cho lên git  

	Để thay đổi trang thái từ tracked > untracked sử dụng : git rm <ten file > 
 		
			ngược lại : git add <ten file > 

Câu  3: Hãy nêu ý nghĩa 3 trạng thái của file trong git (3 stages in git). Các lệnh sử dụng trong Git để chuyển các trạng thái?

	Modified: là file gốc (ở trên máy chủ ), việc sửa đổi trong file này không làm thay đổi trên git. 
		Muốn nó thay đổi trên git thì phải sd : git add .  dau đó  git commit -m "message"

	Staged: Là  file mà đã sẵn  sàng để up lên git . Để nó hiện trên git thì phải sd : git commit -m "message"

	Commit: cam kết. Như việc ký tên chứng minh bạn đã làm gì với file này.
